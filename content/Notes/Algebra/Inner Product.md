---
title: Inner Product
tags:
  - Note
  - algebra
date: 2025-05-10
---
## Positive-definite Inner Product
The positive-definite inner product [^1] is defined by the properties
1. Hermitian property:
   $$
   \langle f, g \rangle = \langle g, f \rangle ^*
   $$
2.  Linear w.r.t the second vector:
   $$
   \langle f, z g + w h \rangle = z \langle f, g \rangle + w \langle f, h \rangle 
   $$
3. Positive definite:
   $$
   \langle f, f \rangle \geq 0 
   $$
4. Zero vector:
   $$
   \langle f, f \rangle = 0 \Leftrightarrow f = 0 
   $$
where $f$, $g$, and $h$ are vectors, while $z$ and $w$ are complex numbers. 

### Antilinear w.r.t. the First Vector
$$
\langle z g + w h, f \rangle = z^* \langle g, f \rangle + w^* \langle h, f \rangle \,.
$$
> [!hint]- Proof
> Swap the order of inner product and use the linear property w.r.t. the second vector
> $$
> \langle z g + w h , f \rangle = \langle f, z g + w h \rangle ^* \,,
> $$
> and proceed accordingly. 



## Schwarz Inner Product 
For Schwarz inner product [^1], you remove the 4th property about zero vectors from [[Inner Product#Positive-definite Inner Product|Positive-definite Inner Product]].  This implies the property
$$
\langle f, f \rangle = 0 \Rightarrow \langle g, f \rangle = 0 \, \forall \, g \in V \,.
$$

> [!hint]- Proof
> Assume $\langle f, f \rangle = 0$, by positivity,
> $$
> \begin{aligned}
> \langle f - \lambda g, f - \lambda g \rangle \geq{}& 0 \\
> \underbrace{\lambda \lambda^* \langle{g, g \rangle}}_{\geq 0} - \lambda \langle f, g \rangle - \lambda^* \langle f, g \rangle ^* \geq{}& 0 \,.
> \end{aligned}
> $$
> If $\langle g, g \rangle = 0$, then
> $$
> - \lambda^* \langle f, g \rangle ^* \geq 0 \,.
> $$
> Choose $\lambda = \langle g, f \rangle$, we have $\langle f, g \rangle = 0$. 
> 
> If $\langle g, g \rangle > 0$, then choose $a \langle g,f \rangle$ and 
> $$
> {\bqty{a^2 \langle g, g \rangle - 2 a}} \abs{\langle{f, g \rangle}}^2 \geq 0 \Rightarrow a < \frac{2}{\langle g, g \rangle} \,.
> $$
> Choose $\ds a = \frac{1}{\langle g, g \rangle}$, we have 
> $$
> - \frac{1}{\langle g, g \rangle} \abs{\langle f, g \rangle}^2 \geq 0 \Rightarrow \langle f, g \rangle = 0\,.
> $$
> This proves the statement above.  


## Indefinite Inner Product
For indefinite inner product [^1], which is relevant in spacetime interval of special relativity, you remove the 3rd and 4th property from [[Inner Product#Positive-definite Inner Product|Positive-definite Inner Product]]. In place of that ,we have the non-degenerate property
$$
\langle f, g \rangle = 0 \, \forall \, f \Rightarrow g = 0\,.
$$

 [[Inner Product#Positive-definite Inner Product|Positive-definite Inner Product]] is a special case, where the 4th property implies this non-degenerate property.
 
 > [!hint]- Proof
 > If $\langle f, g \rangle = 0$ for all $f$, then $\langle g, g \rangle = 0$, which implies that it is a zero vector. 


## Square Integrable Function Inner Product
For square-integrable function, the inner product [^1] can be defined by 
$$
\langle f , g \rangle = \int \dd{x} f^* {\pqty{x} g {\pqty{x}}} \,. 
$$

## Minkowski Inner Product
This is the inner product used in special relativity, where it has properties
1. It is indefinite
2. It is non-degenerate
3. It is invariant under Lorentz transformation
4. It does not satisfy Schwarz inequality 

## Matrix Inner Product
The inner product between matrices [^1] can be defined as 
$$
\langle A, B \rangle = \Tr {\Bqty{A^\dagger B}} \,.
$$

[^1]: Kevin Cahill (2019). Physical Mathematics (Second Edition). Cambridge University Press. Chapter 1.6, 12–14.