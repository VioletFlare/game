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

An explosive projectile explodes, creating an Explosion object as it reaches it's target.

Example of an explosive projectile:
    An AoE spell which effect affects multiple npcs and/or objects. 
    An Explosive Fireball will create an Explosion Object upon impacting a target, 
    the Explosion then will affect multiple npcs and/or objects.
*/