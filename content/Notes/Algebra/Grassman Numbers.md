---
title: Grassman Numbers
tags:
  - Note
  - algebra
date: 2025-04-20
---
Numbers where they are anticommuting [^1] 
$$
\theta_i \theta_j = - \theta_j \theta_i \Rightarrow {\bqty{\theta_i, \theta_j}}_+ = 0 \,.
$$
## Properties
### Square of Grassman numbers
The square of a Grassman number is 0 [^1] 
$$
\theta_i^2 = 0  \,.
$$

^29a23c

> [!hint]- Proof
> Using the definition of Grassman number, put $i = j$ and find that the square must be $0$.

### Functions of Grassman numbers are linear
For example, a two-variable function of Grassman numbers have the form [^1] 
$$
f {\pqty{\theta_1, \theta_2}} = a + b \theta_1 + c \theta_2 + d \theta_1 \theta_2 \,,
$$
where $a$, $b$, $c$, and $d$ are real numbers. 
> [!hint]- Proof
> This comes directly from [[Grassman Numbers#^29a23c|square of Grassman numbers]] 
> $$
> \theta_i^2 = 0 \,.
> $$

## Example Representation
### $2 \times 2$ matrix
The matrix [^2] 
$$
\pmatrix{0 & 0 \\ 1 & 0} 
$$ 
can be used to represent a Grassman number because
$$
\pmatrix{0 & 0 \\ 1 & 0} \pmatrix{0 & 0 \\ 1 & 0} = \pmatrix{0 & 0 \\ 0 & 0}  \equiv 0 \,.
$$

### $4 \times 4$ matrix
The matrices [^2] 
$$
\theta_1 = \pmatrix{0 & 0 & 1 & 0 \\ 0 & 0 & 0 & -1 \\ 0 & 0 & 0 & 0 \\ 0 & 0 & 0 & 0} \qand \theta_2 = \pmatrix{0 & 1 & 0 & 0 \\ 0 & 0 & 0 & 0 \\ 0 & 0 & 0 & 1 \\ 0 & 0 & 0 & 0} 
$$
can be used to represent two Grassman numbers. 

In general, $n$ Grassman numbers can be represented by $2^n \times 2^n$ matrices. 

[^1]: Kevin Cahill (2019). Physical Mathematics (Second Edition). Cambridge University Press. Chapter 1.1, 2. 
[^2]: Kevin Cahill (2019). Physical Mathematics (Second Edition). Cambridge University Press. Chapter 1.3, 6–7.  