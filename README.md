# owl_stack
Real time astrophotography image stacking

A the time, I started this project, I used the last version of siril i.e: v0.99.3. There are some inconsistencies with command pipes, sometimes commands are not received by siril, and sometimes the  command is executed but the output is not sent to the output stream.

# What it does ?
owl_stack app, will stack your deep sky pictures in real time to enhance your pictures.


# Algorithm
The app will process the pitures following the algorithm:
- Your camera/DSLR take the first picture of the following deep sky object
- Your camera/DSLR take the second picture of the following deep sky object
- owl_stack detect the new file in the folder
- owl_stack will:
  - convert debayer it and convert it in fit
  - register it with other pictures
  - stack the regsitered picture into one
  - ...


# What do I need ?
You need :
- an equatorial mount
- a device to take pictures and upload them to the server, DSLR/camera, ...
- a server (e.g: Raspberry pi, laptop, ...) to install siril and run the node.js app
- a screen to control and display the picture, able to connect to a server, smartphone, Laptop, ...
- Connect the device with the screen to the server, wifi, ethernet, ...