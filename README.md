# wot-project-part3-Frontend-sAncoramTamborrino
wot-project-part1-samueleancora created by GitHub Classroom

AN EDGE COMPUTING SOLUTION FOR DRIVER'S SAFETY

The aim of the project is to guarantee and monitor driver's life signals as well as inspect the environment inside the vehicle and manage it. To do so, the Edge Computing paradigm has been chosen to satisfy requirements in speed of elaboration and low delay. The system is composed of three main components: the edge, the server and the frontend.

The first component consists of a Raspeberry Pi 4 and the sensors. Its repository can be found at this address:https://github.com/UniSalento-IDALab-IoTCourse-2021-2022/wot-project-part1-EdgeDevice-sAncoramTamborrino

The second component consists of the server, which is in charge to use machine learning to create a model based on data sent by the edge and to store them in a NoSQL database, MongoDB. Its repository can be found at this address:https://github.com/UniSalento-IDALab-IoTCourse-2021-2022/wot-project-part2-Server-sAncoramTamborrino

The third component consists of the frontend page, where an external user can access to the digital twins of both driver and car, and get notified of occurred events. In this repository the respective code can be found.

To give a better understanding of the architecture of the system, the following picture is attached.


![iotarch](https://user-images.githubusercontent.com/106089600/202003221-f3a556e3-e22e-4b43-8f91-3e7255d2c3a8.png)

The main purposes of the Frontend is to represent an insight of the human-vehicle environment by giving a digital twin of both the driver and the car. So it is implemented a web page with dynamic charts that are uploaded every time there is new data incoming in the server part. This has been accomplished with the use of WebSocket. The frontend component contains also the colab file where the model has been trained and the choices that were made.

To make the system work in the proper way in locale all the components must be in the same working directory with the following structure.
<img width="325" alt="Schermata 2022-10-25 alle 20 10 26" src="https://user-images.githubusercontent.com/106089600/205869485-6915d1ae-49cd-4b6c-a1ef-85e6807b078e.png">
