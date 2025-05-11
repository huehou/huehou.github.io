---
title: Gram–Schmidt Decomposition
tags:
  - Note
  - algebra
date: 2025-05-11
---

Given a set of basis ${\Bqty{V_i}}$ which is not necessarily orthonormal, we can construct an orthonormal basis ${\Bqty{U_i}}$ such that
$$
\langle U_i, U_j \rangle = \delta_{ij} \, \forall \, i,\, j \,,
$$
where $\delta_{ij}$ is the [[Kronecker Delta]]. 

## Algorthim
Start by choosing 
$$
U_1 = \frac{V_1}{\sqrt{\langle V_1, V_1 \rangle}} \,. 
$$
Then, consider 
$$
U_2 = V_2 + c_{12} U_1 \,.
$$
To make $U_2$ orthogonal to $U_1$,
$$
0 = \langle U_1, U_2 \rangle = \langle U_1, V_2\rangle + c_{12} \Rightarrow c_{12} = - \langle U_1, V_2 \rangle \,.
$$ 
Hence,
$$
u_2 = V_2 - U_1 \langle U_1, V_2 \rangle \,,
$$
and normalise the vector
$$
U_2 = \frac{u_2}{\sqrt{\langle u_2, u_2 \rangle}} \,.
$$
Continue removing the component from $V$ that is parallel to the previously constructed $U_i$'s. Hence, we have the general expression
$$
U_k = \frac{u_k}{\sqrt{\langle u_k, u_k \rangle}} \,,
$$
where 
$$
u_k = V_k - \sum_{n=1}^{k-1} U_n \langle U_n, V_k \rangle \,.
$$
This will give us a set of orthonormal basis, although this set is generally not unique. 

[^1]: Kevin Cahill (2019). Physical Mathematics (Second Edition). Cambridge University Press. Chapter 1.10, 18–19. 