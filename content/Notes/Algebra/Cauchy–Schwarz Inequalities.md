---
title: Cauchy–Schwarz Inequalities
tags:
  - Note
  - algebra
date: 2025-05-11
---
The Cauchy–Schwarz inequality [^1] is 
$$
\langle f, f \rangle \, \langle g, g \rangle \geq \abs{\langle f, g \rangle} ^2 \,,
$$
or 
$$
\norm{f} \, \norm{g} \geq \abs{\langle f, g \rangle} \,.
$$

> [!hint]- Proof 1 
> [^1] We start from a non-negative inner product
> $$
> \langle f - \lambda g, f - \lambda g \rangle \geq 0 \,,
> $$
> and expand the inner product using the linear and antilinear property of [[Inner Product]]. If $\langle g, g \rangle = 0$, the equation is immediate. If $\langle g, g, \rangle \neq 0$, then pick
> $$
> \lambda = \frac{\langle g, f \rangle}{\langle g, g \rangle} \,,
> $$
> and the Cauchy–Schwarz inequality is proven. 

>[!hint]- Proof 2 
> Consider the non-negative inner product of the form
> $$
> \langle \alpha f + \beta g, \alpha f + \beta g \rangle \geq 0 \,.
> $$
> Choose $\alpha \in \mathbb{R}$ and $\beta = \langle g, f \rangle$, and use the property of quadratic equations
> $$
> a x^2 + b x + c \geq 0 \Rightarrow b^2 - 4 a c \leq 0 \,.
> $$
> The Cauchy–Schwarz inequality is then proven. 

## Other forms
Addition form [^1]
$$
\norm{\vb{x}} + \norm{\vb{y}} \geq \norm{\vb{x} + \vb{y}}
$$
> [!hint]- Proof
> $$
> \begin{aligned}
> {\pqty{\norm{\vb{x}} + \norm{\vb{y}}}}^2 ={}& \norm{\vb{x}}^2 + \norm{\vb{y}}^2 + 2 \norm{\vb{x}} \norm{\vb{y}} \\
> ={}& \vb{x} \cdot \vb{x} + \vb{y} \cdot \vb{y} + 2 \sqrt{\vb{x}\cdot \vb{x} \, \vb{y} \cdot \vb{y}} \\
> \geq{}& \vb{x} \cdot \vb{x} + \vb{y} \cdot \vb{y} + 2 \vb{x} \cdot \vb{y} \\
> ={}& {\pqty{\vb{x} + \vb{y}}}^2 \,.
> \end{aligned}
> $$
> The equation is then proven.


[^1]: Kevin Cahill (2019). Physical Mathematics (Second Edition). Cambridge University Press. Chapter 1.7, 15–16.