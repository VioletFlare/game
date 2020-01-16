/*
Projectile - A projectile is any kind of non-static and non-permanent physical object 
which follows a simple trajectory consisting of only two points, origin and end.

The lifecycle of a projectile:

* Gets created at an origin
* Follows a trajectory towards it's target
* Reaches or does not reach it's target
* Gets destroyed

The appearance of a projectile is handled by the Effect object which resides inside the projectile object.

Example of a regular projectile: 
    A spell or an arrow shoot by the player or by a game object towards an object, npc or area.

The appearance, physical properties, description is described by a special class dedicated to hold data.

Example:
    The Fireball object describes the Fireball spell with all it's properties regarding description, damage, appearance etc.

* Note as mentioning above Effect handles the appearance but it doesn't describe it. 
  Effect's only responsibility is to render the appearance not to describe it.
*/

import Projectile from '../src/Physics/Projectile';

const _calculateAngleBetweenOriginAndTargetMock = () => {
    return 0.1086859124541331;
}

const checkProjectileRotation = () => {
    const projectile = new Projectile(null, null, null),
        effect = {
            config: {
                physicConfiguration: {
                    rotationOffset: 2.9
                }
            } 
        }

    projectile.effect = effect;

    projectile.originPos = {
        x: 230.17583999305882,
        y: 616.1586912200304
    }

    projectile.targetPos = {
        x: 543.28,
        y: 650.3233333333334
    }

    projectile._calculateAngleBetweenOriginAndTarget = _calculateAngleBetweenOriginAndTargetMock;

    const rotation = projectile._calculateProjectileRotation();

    expect(rotation).toBe(3.008685912454133)
}

test('Given projectile origin x, y, target x, y and rotationOffset return projectile rotation.', () => checkProjectileRotation())