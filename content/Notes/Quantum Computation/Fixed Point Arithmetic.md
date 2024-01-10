---
title: Fixed Point Arithmetic
tags:
  - Note
  - "#QC"
date: 2023-11-27
---
Real numbers can be represented by $c_1$ binary numbers $a$ for the integer part, $c_2$ binary numbers $b$ for the fractional part, and 1 binary number $s$ for the sign of the real number by
$$
Q {\pqty{a,b,s}} = {\pqty{-1}}^s {\pqty{2^{c_1-1} a_{c_1} + \cdots + 2 a_2 + a_1 + \frac{1}{2} b_1 + \cdots + \frac{1}{2^{c_2}}b_{c_2} }} \,.
$$
The real number is restricted in the range
$$
Q {\pqty{a,b,s}} \in {\bqty{-R , R}} \,,
$$
where 
$$
R = 2^{c_1} - 2^{-c_2} \,.
$$