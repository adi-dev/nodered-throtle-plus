# nodered-throtle-plus
Improved NodeRED throtle funcion

The main goal is that the function passes the first message, drops all messages that arrive during throthle period and, if there was any, sends the last message at the end of timeout:

```
        |----------------TIME-OUT-PERIOD--------------------------|----------------TIME-OUT-PERIOD--------------------------|
INPUT:  ---[MESSAGE 1]----[MESSAGE 2]--------[MESSAGE 3]---------------------------------------------------------------------
OUTPUT: ---[MESSAGE 1]---------------------------------------------[MESSAGE 4]-----------------------------------------------
```
