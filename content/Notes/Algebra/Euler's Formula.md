---
title: Euler's Formula
tags:
  - Note
  - algebra
date: 2025-04-20
---
The Euler's formula is [^1]
$$
\E^{\I \theta} = \cos \theta + \I \sin \theta \,.
$$
> [!hint]- Proof by Taylor series
> Expand exponential using Taylor series [^2]
> $$ 
> \E^{\I \theta} = \sum_{n=0}^{\infty} \frac{{\pqty{\I \theta}}^n}{n!} \,, 
> $$
> and connect it with the Taylor series of the trigonometric functions 
> $$
> \cos \theta = \sum_{k=0}^{\infty} \frac{{\pqty{-1}}^k}{{\pqty{2k}}!} \theta^{2k} \qand \sin \theta = \sum_{k=0}^{\infty} \frac{{\pqty{-1}}^k}{{\pqty{2k+1}}!} \theta^{2k+1} \,. 
> $$ 

> [!hint]- Proof by Differentiation 
> Define  [^2]
> $$
> f {\pqty{\theta}} = \frac{\cos \theta + \I \sin \theta}{\E^{\I \theta}} \,,
> $$ 
> and observe that $f' {\pqty{\theta}} = 0$. Use $f {\pqty{0}} = 1$ to get the constant when integrating $f' {\pqty{\theta}} = 0$. 

>[!hint]- Proof by Uniqueness Theorem
> Define 
> $$
> f {\pqty{\theta}} = \cos \theta + \I \sin \theta \,,
> $$ 
> and find that 
> $$
> \dv{}{\theta} f {\pqty{\theta}} = \I f {\pqty{\theta}} \,.
> $$ 
> Solve the differential equation, using $f {\pqty{0}} = 1$ to find the integration constant, then use uniqueness theorem to prove the Euler's formula.

> [!hint]- Proof by Partial Fraction
> Define 
> $$
> \frac{2 \I}{x^2 + 1} = \frac{1}{x - \I} - \frac{1}{x + \I} \,.
> $$ 
> Integrate the equation and find 
> $$
> 2 \I \tan^{-1} {\pqty{x}} + C = \ln \frac{x - \I}{x + \I} \,.
> $$ 
> Substitute 
> $$
> x = \tan \frac{y}{2}
> $$ 
> and solve the equation to 
> $$
> A \E^{\I y} = - \cos y - \I \sin y \,.
> $$ 
> When $y = 0$, $A = -1$, and so the Euler's formula is proven. 


[^1]: Kevin Cahill (2019). Physical Mathematics (Second Edition). Cambridge University Press. Chapter 1.1, 1–2.
[^2]: Wikipedia. Euler's Formula, Proof. source: https://en.wikipedia.org/wiki/Euler%27s_formula#Proofs (accessed on 2025-05-10).