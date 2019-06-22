// *********************************************************************************************************************
// Building library sample usage
// *********************************************************************************************************************
import {Layer, landscapeLayer, placeLayer} from "./dcl-landscapes/library"

// Variable taking positioning raw data
let layerRawData: string = ""

// *********************************************************************************************************************
// Building layer based on ile's modular architecture units
// *********************************************************************************************************************

layerRawData =
    "0,0 36 0 0,0,0\n" +
    "0,1 28 0 0,180,0\n" +
    "0,2 36 0 0,90,0\n" +
    "0,3 11 0 0,180,0\n" +
    "0,4 36 0 0,0,0\n" +
    "0,5 28 0 0,180,0\n" +
    "0,6 36 0 0,90,0\n" +
    "1,0 28 0 0,90,0\n" +
    "1,1 38 0 0,180,0\n" +
    "1,1 42 0 0,0,0\n" +
    "1,2 36 0 0,180,0\n" +
    "1,3 11 4 0,180,0\n" +
    "1,4 36 0 0,270,0\n" +
    "1,5 38 0 0,270,0\n" +
    "1,5 42 0 0,90,0\n" +
    "1,6 28 0 0,270,0\n" +
    "2,0 36 0 0,270,0\n" +
    "2,1 36 0 0,180,0\n" +
    "2,2 19 8 0,180,0\n" +
    "2,3 6 8 0,90,0\n" +
    "2,4 19 8 0,270,0\n" +
    "2,5 36 0 0,270,0\n" +
    "2,6 36 0 0,180,0\n" +
    "3,0 11 0 0,90,0\n" +
    "3,1 11 4 0,90,0\n" +
    "3,2 6 8 0,0,0\n" +
    "3,3 0 0 0,0,0\n" +
    "3,4 6 8 0,180,0\n" +
    "3,5 11 4 0,270,0\n" +
    "3,6 11 0 0,270,0\n" +
    "4,0 36 0 0,0,0\n" +
    "4,1 36 0 0,90,0\n" +
    "4,2 19 8 0,90,0\n" +
    "4,3 6 8 0,270,0\n" +
    "4,4 19 8 0,0,0\n" +
    "4,5 36 0 0,0,0\n" +
    "4,6 36 0 0,90,0\n" +
    "5,0 28 0 0,90,0\n" +
    "5,1 38 0 0,90,0\n" +
    "5,1 42 0 0,90,0\n" +
    "5,2 36 0 0,90,0\n" +
    "5,3 11 4 0,0,0\n" +
    "5,4 36 0 0,0,0\n" +
    "5,5 38 0 0,0,0\n" +
    "5,5 42 0 0,0,0\n" +
    "5,6 28 0 0,270,0\n" +
    "6,0 36 0 0,270,0\n" +
    "6,1 28 0 0,0,0\n" +
    "6,2 36 0 0,180,0\n" +
    "6,3 11 0 0,0,0\n" +
    "6,4 36 0 0,270,0\n" +
    "6,5 28 0 0,0,0\n" +
    "6,6 36 0 0,180,0\n" +

    "0,0 36 16 0,0,0\n" +
    "0,1 28 16 0,180,0\n" +
    "0,2 36 16 0,90,0\n" +
    "0,3 0 16 0,180,0\n" +
    "0,4 36 16 0,0,0\n" +
    "0,5 28 16 0,180,0\n" +
    "0,6 36 16 0,90,0\n" +
    "1,0 28 16 0,90,0\n" +
    "1,1 38 16 0,180,0\n" +
    "1,1 42 16 0,0,0\n" +
    "1,2 36 16 0,180,0\n" +
    "1,3 0 0 0,180,0\n" +
    "1,4 36 16 0,270,0\n" +
    "1,5 38 16 0,270,0\n" +
    "1,5 42 16 0,90,0\n" +
    "1,6 28 16 0,270,0\n" +
    "2,0 36 16 0,270,0\n" +
    "2,1 36 16 0,180,0\n" +
    "2,2 0 16 0,180,0\n" +
    "2,3 0 16 0,90,0\n" +
    "2,4 0 16 0,270,0\n" +
    "2,5 36 16 0,270,0\n" +
    "2,6 36 16 0,180,0\n" +
    "3,0 0 16 0,90,0\n" +
    "3,1 0 16 0,90,0\n" +
    "3,2 0 16 0,0,0\n" +
    "3,3 0 16 0,0,0\n" +
    "3,4 0 16 0,180,0\n" +
    "3,5 0 16 0,270,0\n" +
    "3,6 0 16 0,270,0\n" +
    "4,0 36 16 0,0,0\n" +
    "4,1 36 16 0,90,0\n" +
    "4,2 0 16 0,90,0\n" +
    "4,3 0 16 0,270,0\n" +
    "4,4 0 16 0,0,0\n" +
    "4,5 36 16 0,0,0\n" +
    "4,6 36 16 0,90,0\n" +
    "5,0 28 16 0,90,0\n" +
    "5,1 38 16 0,90,0\n" +
    "5,1 42 16 0,90,0\n" +
    "5,2 36 16 0,90,0\n" +
    "5,3 0 16 0,0,0\n" +
    "5,4 36 16 0,0,0\n" +
    "5,5 38 16 0,0,0\n" +
    "5,5 42 16 0,0,0\n" +
    "5,6 28 16 0,270,0\n" +
    "6,0 36 16 0,270,0\n" +
    "6,1 28 16 0,0,0\n" +
    "6,2 36 16 0,180,0\n" +
    "6,3 0 0 16,0,0\n" +
    "6,4 36 16 0,270,0\n" +
    "6,5 28 16 0,0,0\n" +
    "6,6 36 16 0,180,0\n" +

    "0,0 36 32 0,0,0\n" +
    "0,1 28 32 0,180,0\n" +
    "0,2 36 32 0,90,0\n" +
    "0,3 0 32 0,180,0\n" +
    "0,4 36 32 0,0,0\n" +
    "0,5 28 32 0,180,0\n" +
    "0,6 36 32 0,90,0\n" +
    "1,0 28 32 0,90,0\n" +
    "1,1 38 32 0,180,0\n" +
    "1,1 42 32 0,0,0\n" +
    "1,2 36 32 0,180,0\n" +
    "1,3 0 0 0,180,0\n" +
    "1,4 36 32 0,270,0\n" +
    "1,5 38 32 0,270,0\n" +
    "1,5 42 32 0,90,0\n" +
    "1,6 28 32 0,270,0\n" +
    "2,0 36 32 0,270,0\n" +
    "2,1 36 32 0,180,0\n" +
    "2,2 0 32 0,180,0\n" +
    "2,3 0 32 0,90,0\n" +
    "2,4 0 32 0,270,0\n" +
    "2,5 36 32 0,270,0\n" +
    "2,6 36 32 0,180,0\n" +
    "3,0 0 32 0,90,0\n" +
    "3,1 0 32 0,90,0\n" +
    "3,2 0 32 0,0,0\n" +
    "3,3 0 32 0,0,0\n" +
    "3,4 0 32 0,180,0\n" +
    "3,5 0 32 0,270,0\n" +
    "3,6 0 32 0,270,0\n" +
    "4,0 36 32 0,0,0\n" +
    "4,1 36 32 0,90,0\n" +
    "4,2 0 32 0,90,0\n" +
    "4,3 0 32 0,270,0\n" +
    "4,4 0 32 0,0,0\n" +
    "4,5 36 32 0,0,0\n" +
    "4,6 36 32 0,90,0\n" +
    "5,0 28 32 0,90,0\n" +
    "5,1 38 32 0,90,0\n" +
    "5,1 42 32 0,90,0\n" +
    "5,2 36 32 0,90,0\n" +
    "5,3 0 32 0,0,0\n" +
    "5,4 36 32 0,0,0\n" +
    "5,5 38 32 0,0,0\n" +
    "5,5 42 32 0,0,0\n" +
    "5,6 28 32 0,270,0\n" +
    "6,0 36 32 0,270,0\n" +
    "6,1 28 32 0,0,0\n" +
    "6,2 36 32 0,180,0\n" +
    "6,3 0 0 32,0,0\n" +
    "6,4 36 32 0,270,0\n" +
    "6,5 28 32 0,0,0\n" +
    "6,6 36 32 0,180,0\n" +

    "0,0 36 48 0,0,0\n" +
    "0,1 28 48 0,180,0\n" +
    "0,2 36 48 0,90,0\n" +
    "0,3 0 48 0,180,0\n" +
    "0,4 36 48 0,0,0\n" +
    "0,5 28 48 0,180,0\n" +
    "0,6 36 48 0,90,0\n" +
    "1,0 28 48 0,90,0\n" +
    "1,1 38 48 0,180,0\n" +
    "1,1 42 48 0,0,0\n" +
    "1,2 36 48 0,180,0\n" +
    "1,3 0 0 0,180,0\n" +
    "1,4 36 48 0,270,0\n" +
    "1,5 38 48 0,270,0\n" +
    "1,5 42 48 0,90,0\n" +
    "1,6 28 48 0,270,0\n" +
    "2,0 36 48 0,270,0\n" +
    "2,1 36 48 0,180,0\n" +
    "2,2 0 48 0,180,0\n" +
    "2,3 0 48 0,90,0\n" +
    "2,4 0 48 0,270,0\n" +
    "2,5 36 48 0,270,0\n" +
    "2,6 36 48 0,180,0\n" +
    "3,0 0 48 0,90,0\n" +
    "3,1 0 48 0,90,0\n" +
    "3,2 0 48 0,0,0\n" +
    "3,3 0 48 0,0,0\n" +
    "3,4 0 48 0,180,0\n" +
    "3,5 0 48 0,270,0\n" +
    "3,6 0 48 0,270,0\n" +
    "4,0 36 48 0,0,0\n" +
    "4,1 36 48 0,90,0\n" +
    "4,2 0 48 0,90,0\n" +
    "4,3 0 48 0,270,0\n" +
    "4,4 0 48 0,0,0\n" +
    "4,5 36 48 0,0,0\n" +
    "4,6 36 48 0,90,0\n" +
    "5,0 28 48 0,90,0\n" +
    "5,1 38 48 0,90,0\n" +
    "5,1 42 48 0,90,0\n" +
    "5,2 36 48 0,90,0\n" +
    "5,3 0 48 0,0,0\n" +
    "5,4 36 48 0,0,0\n" +
    "5,5 38 48 0,0,0\n" +
    "5,5 42 48 0,0,0\n" +
    "5,6 28 48 0,270,0\n" +
    "6,0 36 48 0,270,0\n" +
    "6,1 28 48 0,0,0\n" +
    "6,2 36 48 0,180,0\n" +
    "6,3 0 0 48,0,0\n" +
    "6,4 36 48 0,270,0\n" +
    "6,5 28 48 0,0,0\n" +
    "6,6 36 48 0,180,0\n" +

    "0,3 13 48 0,90,0\n"

let ilesModularArchitecture = new Layer(
    "ile's architecture modules",
    layerRawData,
    new Vector3(4, 0 ,4),
    Quaternion.Euler(0, 0, 0),
    16,
    new Vector3(0.05, 0.05 ,0.05),
    true
)
placeLayer(ilesModularArchitecture)

// *********************************************************************************************************************
// Forest layer
// *********************************************************************************************************************
layerRawData =
    "0,0 101 0 0,0,0 .02,.02,.02\n" +
    "0,1 101 0 0,0,0 .02,.02,.02\n" +
    "0,2 101 0 0,0,0 .02,.02,.02\n" +
    "0,3 101 0 0,0,0 .02,.02,.02\n" +
    "0,4 101 0 0,0,0 .02,.02,.02\n" +
    "0,5 101 0 0,0,0 .02,.02,.02\n" +
    "0,6 101 0 0,0,0 .02,.02,.02\n" +
    "0,7 101 0 0,0,0 .02,.02,.02\n" +
    "0,8 101 0 0,0,0 .02,.02,.02\n" +
    "0,9 101 0 0,0,0 .02,.02,.02\n" +
    "1,0 101 0 0,0,0 .02,.02,.02\n" +
    "1,1 101 0 0,0,0 .02,.02,.02\n" +
    "1,2 101 0 0,0,0 .02,.02,.02\n" +
    "1,3 101 0 0,0,0 .02,.02,.02\n" +
    "1,4 101 0 0,0,0 .02,.02,.02\n" +
    "1,5 101 0 0,0,0 .02,.02,.02\n" +
    "1,6 101 0 0,0,0 .02,.02,.02\n" +
    "1,7 101 0 0,0,0 .02,.02,.02\n" +
    "1,8 101 0 0,0,0 .02,.02,.02\n" +
    "1,9 101 0 0,0,0 .02,.02,.02\n" +
    "2,0 101 0 0,0,0 .02,.02,.02\n" +
    "2,1 101 0 0,0,0 .02,.02,.02\n" +
    "2,2 101 0 0,0,0 .02,.02,.02\n" +
    "2,3 101 0 0,0,0 .02,.02,.02\n" +
    "2,4 101 0 0,0,0 .02,.02,.02\n" +
    "2,5 101 0 0,0,0 .02,.02,.02\n" +
    "2,6 101 0 0,0,0 .02,.02,.02\n" +
    "2,7 101 0 0,0,0 .02,.02,.02\n" +
    "2,8 101 0 0,0,0 .02,.02,.02\n" +
    "2,9 101 0 0,0,0 .02,.02,.02\n" +
    "3,0 101 0 0,0,0 .02,.02,.02\n" +
    "3,1 101 0 0,0,0 .02,.02,.02\n" +
    "3,2 101 0 0,0,0 .02,.02,.02\n" +
    "3,3 101 0 0,0,0 .02,.02,.02\n" +
    "3,4 101 0 0,0,0 .02,.02,.02\n" +
    "3,5 101 0 0,0,0 .02,.02,.02\n" +
    "3,6 101 0 0,0,0 .02,.02,.02\n" +
    "3,7 101 0 0,0,0 .02,.02,.02\n" +
    "3,8 101 0 0,0,0 .02,.02,.02\n" +
    "3,9 101 0 0,0,0 .02,.02,.02\n" +
    "4,0 101 0 0,0,0 .02,.02,.02\n" +
    "4,1 101 0 0,0,0 .02,.02,.02\n" +
    "4,2 101 0 0,0,0 .02,.02,.02\n" +
    "4,3 101 0 0,0,0 .02,.02,.02\n" +
    "4,4 101 0 0,0,0 .02,.02,.02\n" +
    "4,5 101 0 0,0,0 .02,.02,.02\n" +
    "4,6 24 0 0,0,0 .02,.02,.02\n" +
    "4,7 101 0 0,0,0 .02,.02,.02\n" +
    "4,8 101 0 0,0,0 .02,.02,.02\n" +
    "4,9 101 0 0,0,0 .02,.02,.02\n" +
    "5,0 101 0 0,0,0 .02,.02,.02\n" +
    "5,1 50 0 0,0,0 .02,.02,.02\n" +
    "5,2 101 0 0,0,0 .02,.02,.02\n" +
    "5,3 101 0 0,0,0 .02,.02,.02\n" +
    "5,4 101 0 0,0,0 .02,.02,.02\n" +
    "5,5 50 0 0,0,0 .02,.02,.02\n" +
    "5,6 101 0 0,0,0 .02,.02,.02\n" +
    "5,7 101 0 0,0,0 .02,.02,.02\n" +
    "5,8 101 0 0,0,0 .02,.02,.02\n" +
    "5,9 101 0 0,0,0 .02,.02,.02\n"


let theForest = new Layer(
    "The forest",
    layerRawData,
    new Vector3(1, 0,1),
    Quaternion.Euler(0, 0, 0),
    12,
    new Vector3(0.05, 0.05 ,0.5),
    true
)
landscapeLayer(theForest, new Vector3(0.2, 0, 0.4), new Vector3(0,1,0))
placeLayer(theForest)


