sec = 0
min2 = 0
hr = 0

def on_forever():
    global sec
    sec += 1
basic.forever(on_forever)
