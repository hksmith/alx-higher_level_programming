#!/usr/bin/python3
def isupper(str):
    for i in str:
        if ord(i) >= 97 and ord(i) <= 122:
            i = ord(i) - 32
            print("{}".format(chr(i)), end='')
        else:
            print("{}".format(i), end='')
