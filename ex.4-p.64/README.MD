## Exercise 3

We want to implement a mini-language to control a simple turtle graphics system. 
The language consist of single-letter commands, some followed by a single number.

For example, the following input would draw a rectangle.

P 2 # select pen 2

D   # pen down

W 2 # draw west 2cm

N 1 # then north 1

E 2 # then east 2

S 1 # back south
 
U   # pen up


Implement the code that parses this language. It should be designed so that it 
is simple to add new commands.