const os=require('os') //the inbuild modules are all small case while importing in the require

console.log(os.platform());
console.log(os.homedir());
console.log(os.hostname());
console.log(os.arch());

function getSystemUptime()
{
console.log("System uptime :"+os.uptime()/3600+'hrs');
}

getSystemUptime();

console.log(os.freemem())






/* 
This script makes use of the os (Operating System) core module in Node.js to
 access system-related information. Let's break down the code step by step, explaining each part 
 and discussing other useful methods you might want to know from the os module to enhance your knowledge as a developer.

Code Breakdown:
javascript
Copy code
 */

//const os = require('os');

//This line imports the built-in os module, which provides utility functions for interacting with the operating system.


console.log(os.platform());

/* 
os.platform() returns a string identifying the operating system 
platform (e.g., 'darwin' for macOS, 'win32' for Windows, 'linux' for Linux).
Use Case: This is useful when writing cross-platform Node.js applications that may need
 to behave differently based on the platform.
 */



console.log(os.homedir());
/* 
os.homedir() returns the path of the current user's home directory.
Use Case: Useful for accessing or storing user-specific configuration files or data.

 */


console.log(os.hostname());

/* os.hostname() returns the hostname of the operating system.
Use Case: This might be used in distributed systems or cloud environments to identify which machine is handling a request.
 */

console.log(os.arch());

/*
 os.arch() returns a string identifying the operating system CPU architecture (e.g., 'x64', 'arm').
Use Case: This helps when dealing with low-level system processes or when you want to conditionally
 load architecture-specific binaries or libraries.
 */


//------------------------------Custom Function for System Uptime:

function getSystemUptime() {
    console.log("System uptime :" + os.uptime() / 3600 + 'hrs');
}

/* 
This function calculates and logs the system uptime (how long the system has been running) in hours.
os.uptime() returns the system uptime in seconds, so dividing it by 3600 converts it into hours.
Use Case: Monitoring server uptime is a common requirement in operations,
 and this is useful when you want to keep track of how long a machine has been running.
 */

getSystemUptime();

/* Calls the getSystemUptime() function to log the uptime.
 */


console.log(os.freemem());

/* 
os.freemem() returns the amount of free system memory in bytes.
Use Case: This is useful in scenarios where you're monitoring system performance or managing resources on the machine. 
*/

/* 
Other Useful Methods in the os Module:
To be a better developer, especially for systems-related applications,
 here are other important methods from the os module you should be familiar with: 
 */

 //1
os.totalmem();
/* 
Returns the total amount of system memory in bytes.
Use Case: Use this in conjunction with os.freemem() to calculate memory usage.
 */
console.log('Total memory: ' + os.totalmem() / (1024 * 1024) + ' MB');


//2
os.cpus();
/* 
Returns an array of objects containing information about each logical CPU core (e.g., model, speed, and times).
Use Case: Useful for optimizing or monitoring CPU performance, especially in multi-threaded environments.
 */
console.log('CPU Info:', os.cpus());

//3
os.networkInterfaces();
/* 
Returns an object listing the network interfaces available on the system.
Use Case: Important for network diagnostics, or determining the machine’s IP address when setting up servers.
 */
console.log('Network Interfaces:', os.networkInterfaces());

//4
os.endianness();
/* 
Returns a string identifying the byte order of the CPU ("BE" for big-endian, "LE" for little-endian).
Use Case: Low-level binary data processing.
 */
console.log('CPU Endianness:', os.endianness());

//5
os.loadavg();
/* 
Returns an array containing the 1, 5, and 15-minute load averages.
Use Case: This is mainly relevant on UNIX-based systems and provides information on the system’s 
load (average number of processes running). It helps in performance monitoring.
 */
console.log('Load Average:', os.loadavg());

//6
os.type();
/* 
Returns the operating system name (e.g., 'Linux', 'Darwin', 'Windows_NT').
Use Case: Identifying the OS type when you need to fine-tune behavior for specific operating systems.
 */
console.log('OS Type:', os.type());

//7
os.userInfo();
/* 
Returns information about the currently logged-in user (username, home directory, shell, etc.).
Use Case: This is helpful when you need to know which user is executing the script or need access to user-specific files.
 */
console.log('User Info:', os.userInfo());


/* 
Summary
The os module in Node.js is a powerful utility that helps interact with the system environment. 
Understanding how to use the os module is crucial for developers working on server-side code, especially 
when dealing with system-level information or managing resources efficiently.

To become a better developer:

Understand the system you're working on: Get familiar with the CPU, memory, network interfaces, and performance metrics.
Monitor system resources: You’ll be better prepared to handle bottlenecks or optimize the usage of system resources by
 leveraging the right tools from the os module.
Write platform-agnostic code: Use methods like os.platform() and os.arch() to ensure that your code works 
across different platforms (Windows, macOS, Linux).
 */








