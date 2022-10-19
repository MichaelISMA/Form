koloda = [6,7,8,9,10,2,3,4,11] * 4

import random
random.shuffle(koloda)

print('Lets Play')
count = 0

while True:
    choice = input('Do you wanna card? y/n\n')
    if choice == 'y':
        current = koloda.pop()
        print('You get good card %d' %current)
        count += current
        if count > 21:
            print('Sorry you lost')
            break
        elif count == 21:
            print('congratulation You get 21!')
            break
        else:
            print('You have %d points.' %count)
    elif choice == 'n':
        print('You have %d points and you end game.' %count)
        break

print('See you soon!')