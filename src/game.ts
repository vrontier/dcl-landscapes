// *********************************************************************************************************************
//
// Cryptovrontier and Ile's DCL Landscapes Library
//
// *********************************************************************************************************************
import {Layer, landscapeLayer, placeLayer} from "./dcl-landscapes/library"

// Variable taking positioning raw data
let layerRawData: string = ""

// *********************************************************************************************************************
//
// Layer "Cloud animation" - Definition and Placement
//
// *********************************************************************************************************************

layerRawData =
    "0,0 50 0 0,90,0\n"
    + "0,1 21 0 0,0,0\n"
    + "1,0 30 0 0,0,0\n"
    + "1,1 15 0 0,90,0"

let modularLandscape1: Layer = new Layer(
    "Cloud animation",
    new Vector3(2,0,2),
    layerRawData,
    new Vector3(0,40,0),
    Quaternion.Euler(0,0,0),
    16,
    new Vector3(1,1,1),
    true
)

placeLayer(landscapeLayer(modularLandscape1, new Vector3(0,0,0), new Vector3(0,0,0)))


// *********************************************************************************************************************
//
// Layer "Cloud animation" - Animation
//
// *********************************************************************************************************************

const modularLandscape1WayPoints = new Path3D([
    new Vector3(0,40,0),
    new Vector3(160,40,160)
])

@Component("pathData")
export class modularLandscape1PathData {
    origin: Vector3 = modularLandscape1WayPoints.path[0]
    target: Vector3 = modularLandscape1WayPoints.path[modularLandscape1WayPoints.path.length-1]
    fraction: number = 0
    nextPathIndex: number = 1
}

export class modularLandscape1PatrolPath implements ISystem {
    update(dt: number) {
        let transform = modularLandscape1.entity.getComponent(Transform)
        let path = modularLandscape1.entity.getComponent(modularLandscape1PathData)
        if (path.fraction < 1) {
            transform.position = Vector3.Lerp(
                path.origin,
                path.target,
                path.fraction
            )
            path.fraction += dt / 60
        } else {
            path.nextPathIndex += 1
            if (path.nextPathIndex >= modularLandscape1WayPoints.path.length) {
                path.nextPathIndex = 0
            }
            path.origin = path.target
            path.target = modularLandscape1WayPoints.path[path.nextPathIndex]
            path.fraction = 0
        }
    }
}

modularLandscape1.entity.addComponent(new modularLandscape1PathData())
engine.addSystem(new modularLandscape1PatrolPath())

// *********************************************************************************************************************
//
// Layer "DCL Landscapes" - Definition and Placement
//
// *********************************************************************************************************************

layerRawData =
    "10,10 65 6 90,0,180 1,1,1\n"
    + "8.5,10 67 10 90,0,180 .5,1,.5\n"
    + "21,10 66 10 90,0,180 .6,1,.6"

let modularLandscape2: Layer = new Layer(
    "DCL Landscapes",
    new Vector3(2,0,2),
    layerRawData,
    new Vector3(16,10,16),
    Quaternion.Euler(0,45,0),
    1,
    new Vector3(0.8,0.8,0.8),
    false
)

placeLayer(landscapeLayer(modularLandscape2, new Vector3(0,0,0), new Vector3(0,0,0)))