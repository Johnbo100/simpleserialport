//I am using a 8266 with an mpu 6050 to display all the data
const serialport = require('serialport')
const Readline = require('@serialport/parser-readline')

const port = new serialport('com24',{
    baudRate:9600
})

const parser = new Readline()
port.pipe(parser)

parser.on("data",(line)=> console.log(line))

port.write("getting data")
