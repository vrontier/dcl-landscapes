# DCL Landscapes
**Decentraland Hackathon June 2019**

## Description
DCL Landscapes is an an open source Library for programming virtual reality landscapes in <a href="http://www.decentraland.org">Decentraland</a> using its <a href="https://github.com/decentraland/ecs-reference">ECS API</a>. 

The library contains architectural models in gltf format created by <a href="https://github.com/iillee">Luke Escobar</a> (ile#9466 on Discord) and placement and landscaping functionality in Typescript created by <a href="https://github.com/vrontier">Mike Quest</a> (Cyptovrontier#8787 in Discord).

<a href="http://www.cryptoquest.io:8090">Demoland</a>, our Hackathon contribution scene was created using DCL Landscapes.

With DCL Landscapes, user can create 

* Architectural scenes based on the library's prefabricated, modular building blocks or on user generated gltf models
* Terrains and randomized model placements, e.g. for forest 
* Animated layers based on rotation or an animation path
* Audio landscapes

The design philosophy behind  DCL Landscapes is to provide a modular building system which can be arranged, placed and animated in layers. Layers will typically hold the elements of a specific theme or domain, e.g. models belonging to one building system or the terrain or a forest. Layers can be combined with each other without any constraints by DCL Landscapes.   

You may try out the <a href="http://www.cryptoquest.io/dcl-landscapes/">web-based DCL Landscaper user interface</a> which will allow you to create, edit and place layers into DCL scenes. The resulting scene can be downloaded and used in user-specific Decentraland projects by simply copying models and source code into your local DCL scene folder.

## Library structure
The libray consists of the following elements:
* Folder `models/` contains gltf models provided with the library (Apache 2.0 license)
* Folder `sounds/` contains sample mp3 audio files from <a href="https://freesound.org">https://freesound.org</a> under creative commons license, please check file meta data for details  
* Folder `src/`contains a sample `game.ts` using the DCL Landscapes library
* Folder `src/dcl-landscapes/` contains the DCL Landscapes library files
** File `library.ts` holds the functions provided by the DCL Landscapes library
** File `resourceRepository.ts` holds the links to the individual resource files (gltf models and audio files) - please note that this this file needs to be edited to add user content in this early version of the library

## Library features
* `Layer` class containing layer meta data (dimensions, cell size, position, scale etc.) and the resource/model placements (e.g. cell coordinate, resourced id; elevation in layer, rotation etc.)
* `placeLayer` function for placing a layer and its components in scene
* `randomizeLayer` function for randomizing position and rotation of an individual resource/model within the cells of a layer
* `placeFloor` function for placing a simple floor tile on the ground of a scene

In its current version, rotation and animation along a path are implemented only in the web-based DCL Landscaper. This function will be transfered to the library as well. The features however are encoded in the generated `game.ts` file and therefore available for users to include into their scenes.    

**Happy building and hacking!**<br/>
Mike (Cryptovrontier) and Luke (ile)
