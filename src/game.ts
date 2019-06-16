// Building library
import {Layer, createCloud, landScaping, placeLayer, terrain} from "./dcl-landscapes/library"

//create a new layer from rwa data
let layerName: string = "Layer One"
let layerRawData: string =
    "0,0 48 0 0,0,0\n" +
    "0,1 28 0 0,180,0\n" +
    "0,2 36 0 0,90,0\n" +
    "0,3 11 0 0,180,0\n" +
    "0,4 48 0 0,0,0\n" +
    "0,5 28 0 0,180,0\n" +
    "0,6 36 0 0,90,0\n" +
    "1,0 28 0 0,90,0\n" +
    "1,1 34 0 0,180,0\n" +
    "1,2 48 0 0,180,0\n" +
    "1,3 11 4 0,180,0\n" +
    "1,4 48 0 0,270,0\n" +
    "1,5 34 0 0,270,0\n" +
    "1,6 28 0 0,270,0\n" +
    "2,0 48 0 0,270,0\n" +
    "2,1 36 0 0,180,0\n" +
    "2,2 19 8 0,180,0\n" +
    "2,3 6 8 0,90,0\n" +
    "2,4 19 8 0,270,0\n" +
    "2,5 48 0 0,270,0\n" +
    "2,6 48 0 0,180,0\n" +
    "3,0 11 0 0,90,0\n" +
    "3,1 11 4 0,90,0\n" +
    "3,2 6 8 0,0,0\n" +
    "3,3 42 0 0,0,0\n" +
    "3,4 6 8 0,180,0\n" +
    "3,5 11 4 0,270,0\n" +
    "3,6 11 0 0,270,0\n" +
    "4,0 48 0 0,0,0\n" +
    "4,1 48 0 0,90,0\n" +
    "4,2 19 8 0,90,0\n" +
    "4,3 6 8 0,270,0\n" +
    "4,4 19 8 0,0,0\n" +
    "4,5 48 0 0,0,0\n" +
    "4,6 48 0 0,90,0\n" +
    "5,0 28 0 0,90,0\n" +
    "5,1 34 0 0,90,0\n" +
    "5,2 48 0 0,90,0\n" +
    "5,3 11 4 0,0,0\n" +
    "5,4 48 0 0,0,0\n" +
    "5,5 34 0 0,0,0\n" +
    "5,6 28 0 0,270,0\n" +
    "6,0 48 0 0,270,0\n" +
    "6,1 28 0 0,0,0\n" +
    "6,2 48 0 0,180,0\n" +
    "6,3 11 0 0,0,0\n" +
    "6,4 48 0 0,270,0\n" +
    "6,5 28 0 0,0,0\n" +
    "6,6 48 0 0,180,0\n" +
    ""

let layerPosition: Vector3 = new Vector3(0, 0 ,0)
let layerPivotPosition: Vector3 = new Vector3(0, 0, 0)
let layerCellSize: number = 16
let layerScale: Vector3 = new Vector3(1, 1 ,1)

let layer = new Layer(layerName, layerRawData, layerPosition, layerPivotPosition, layerCellSize, layerScale)
placeLayer(layer)



