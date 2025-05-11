---
title: Unitary Matrix
tags:
  - Note
  - algebra
date: 2025-05-10
---
A matrix $U$ is unitary if [^1]
$$
U^\dagger U = \um \,, 
$$
where $U^\dagger$ is the [[Hermitian Matrix|Hermitian Conjugate]] of a matrix. 

## Properties
### Connection to Orthogonal Matrices
A real unitary matrix is an orthogonal matrix
> [!hint]- Proof
> Use the definition of orthogonal matrix 
> $$
> O^T O = \um \,.
> $$


### Inner Product Invariant
Unitary transformation preserves inner products [^2] 

>[!hint]- Proof
> Suppose 
> $$
> \ket{\alpha_k}  = U \ket{k} \,.
> $$
> Then, the inner product is
> $$
> \braket{\alpha_l}{\alpha_k} = \bra{l} U^\dagger U \ket{k} = \braket{l}{k} \,.
> $$

### Unit Determinant
Unitary matrix has determinant $1$ [^2] 

>[!hint]- Proof
>$$
>\begin{aligned}
>U^\dagger U ={}& \um \\
>\det{U^\dagger} \det{U} ={}& 1 \\
>\abs{\det{U}}^2 ={}& 1 \,.
>\end{aligned}
>$$
>Because the matrix is unitary, and it does not change the eigenvalues, it should have a positive determinant, and has the statement is proven. 









[^1]: Kevin Cahill (2019). Physical Mathematics (Second Edition). Cambridge University Press. Chapter 1.3, 6. 
[^2]: Kevin Cahill (2019). Physical Mathematics (Second Edition). Cambridge University Press. Chapter 1.16, 27–28.