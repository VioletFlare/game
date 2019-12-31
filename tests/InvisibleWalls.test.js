/* 
InvisibleWalls - Responsible for rendering invisible walls. 
Takes in polyline objects drawn on a layer in Tiled and adds them to scene as physical objects.
*/

import InvisibleWalls from "../src/Physics/InvisibleWalls";
import FakeTiledPolygonObject from './fakes/FakeTiledPolygonObject';

const checkLeftToRight = () => {
    const fakeTiledPolygonObject = new FakeTiledPolygonObject(),
    leftToRightPolyline = [
        { x: 16, y: 0 },
        { x: 846.667, y: 0 }
    ];

    fakeTiledPolygonObject.setPolyline(leftToRightPolyline);
    fakeTiledPolygonObject.setObjectPosition(129, 694);

    const position = InvisibleWalls._calculatePosition(fakeTiledPolygonObject);

    expect(position).toEqual([145, 694]);
};

const checkRightToLeft = () => {
    const fakeTiledPolygonObject = new FakeTiledPolygonObject(),
    rightToLeftPolyline = [
        { x: 0, y: 0 },
        { x: -192, y: 0 }
    ];

    fakeTiledPolygonObject.setPolyline(rightToLeftPolyline);
    fakeTiledPolygonObject.setObjectPosition(416, 640);

    const position = InvisibleWalls._calculatePosition(fakeTiledPolygonObject);

    expect(position).toEqual([224, 640]);
}

const checkTopToDown = () => {
    const fakeTiledPolygonObject = new FakeTiledPolygonObject(),
    downToTopPolyline = [
        {x: 0, y: 0},
        {x: 0, y: 160}
    ];

    fakeTiledPolygonObject.setPolyline(downToTopPolyline);
    fakeTiledPolygonObject.setObjectPosition(288, 480);

    const position = InvisibleWalls._calculatePosition(fakeTiledPolygonObject);

    expect(position).toEqual([288, 480]);
}

const checkDownToTop = () => {
    const fakeTiledPolygonObject = new FakeTiledPolygonObject(),
    downToTopPolyline = [
        {x: 0, y: 0},
        {x: 0, y: -160}
    ];

    fakeTiledPolygonObject.setPolyline(downToTopPolyline);
    fakeTiledPolygonObject.setObjectPosition(288, 640);

    const position = InvisibleWalls._calculatePosition(fakeTiledPolygonObject);

    expect(position).toEqual([288, 480]);
}

test('Check polyline drawn from left to right.', checkLeftToRight);
test('Check polyline drawn from right to left.', checkRightToLeft);
test('Check polyline drawn from top to down.', checkTopToDown);
test('Check polyline drawn from down to top.', checkDownToTop);
