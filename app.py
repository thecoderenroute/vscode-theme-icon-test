# importing modules
import itertools, random

# make a deck of cards
def get_deck(n=14):
    return list(itertools.product(range(1,14),['Spade','Heart','Diamond','Club']))

# shuffle the cards
def shuffle(deck):
    random.shuffle(deck)
    
def draw(deck, n = 7):
    for i in range(n):
        print(deck[i][0], "of", deck[i][1])

if __name__ == '__main__':
    deck = get_deck()
    shuffle(deck)
    draw(deck,5)
    