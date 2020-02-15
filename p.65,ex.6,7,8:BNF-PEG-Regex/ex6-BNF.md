### Ex.6

Design a BNF grammar to parse a time specification. 

All of the following should be accepted;

4pm, 7:38pm, 23:42, 3:16, 3:16am

-------

```
 <time> ::= <hour><meridian>    |
            <hour><colon><minute><meridian> |
            <hour><colon><minute>   |
         
<hour>          ::= <hour-tens><digit>
<hour-tens>     ::= 0 | 1 | 2
<digit>         ::= 0 | 1 | 2 | ... | 8 | 9
<minute>        ::= <minute-tens><digit>
<minute-tens>   ::= 0 | 1 | 2 | ... | 4 | 5
<colon>         ::= :
<meridiem>      ::= am | pm
```