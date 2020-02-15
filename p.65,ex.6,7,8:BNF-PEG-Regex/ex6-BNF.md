### Ex.6

Design a BNF grammar to parse a time specification. 

All of the following should be accepted;

4pm, 7:38pm, 23:42, 3:16, 3:16am

-------

```
 <time> ::= <digit-tens><digit><meridem>    | 
            <digit><meridiem>
            <digit-tens><digit><colon><min-tens><digit><meridiem> |
            <digit-tens><digit><colon><min-tens><digit>   |
            <digit><colon><min-tens><digit>   |
            <digit><colon><min-tens><digit><meridiem>


<digit-tens>    ::= 0 | 1
<digit>         ::= 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9
<meridiem>      ::= am | pm
<min-tens>      ::= 0 | 1 | 2 | 3 | 4 | 5 
```