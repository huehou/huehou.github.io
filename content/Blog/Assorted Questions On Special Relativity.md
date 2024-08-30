---
title: Assorted Questions On Special Relativity
tags:
  - blog
date: 2024-08-30
---
> [!info] 
> This note is prepared for the students of PC3232 Nuclear Physics

## In the spacetime interval, can we treat the time component as imaginary so that they have the same signs?

The spacetime interval is defined as
$$
s^2 = {\pqty{c t}}^2 - x^2 - y^2 - z^2 \,.
$$
Therefore, you can treat time as imaginary so that we recover something that resembles the Euclidean norm
$$
s^2 = - (\I c t)^2 - x^2 - y^2 - z^2 \,.
$$
By Euclidean, we refer to the familiar geometry where the distance is given by the Pythagoras' theorem. In fact, people used to do this so that the calculations resemble Euclidean geometry, as you might have encountered in older textbooks. While this may be mathematically familiar, it hides away the real geometrical structure of special relativity. 

For example, in imaginary time, Lorentz transformation resembles rotation. However, rotation is periodic, but Lorentz transformation is not. Meanwhile, in Euclidean space, a zero distance suggests that two points are at the same location. But in special relativity, if the spacetime interval is zero, it means that the two events are connected by light, which can be at two different locations on the graph. 

This is why we need the different in sign in the spacetime interval. It captures the right geometry. And more importantly, when we go from special relativity to general relativity, we generalise the notion into a curved spacetime.  There is no known way to make imaginary time work for curved spacetime. While using imaginary time gives you a false familiarity of the Euclidean geometry, it is very restrictive and may give you a false intuition. Therefore, it is more helpful to treat special relativity in the same formalism as general relativity.

> [!info]-
> For those who are more advanced, the different in sign encodes a hyperbolic geometry. If you are familiar with hyperbolae, you will remember there are two asymptotes. These are what we call the light cone, because for any matter can be stationary, you can never reach the speed of light, and can only get ever closer to the speed of light. The hyperbolic geometry captures that property. Also, the light cones form the limit at which things can affect each other. The Euclidean-like geometry hides all these properties, but the spacetime interval exposes all these properties. 

## Can we have a definition of cross product between two 4-vectors?

This looks like a benign question, but it is actually quite deep, and it requires some knowledge of algebra that is beyond the scope of this module. While I cannot give you a simple derivation, I can tell you the conclusion: cross products exist only in 3 and 7 dimensions. 

> [!warning]
> The following is not tested in any way, but just in case some of you are advanced enough to understand what is going on. You can stop at accepting that a proper definition of cross product only works for 3 and 7 dimensions, leaving the proof for much later when you developed the necessary mathematics. 


For those who are a bit more advanced, I can try to give you some intuition. Keep in mind, this is not a rigorous derivation, but just an idea. We start by defining the cross product by
1. The cross product of two vectors $\vb{x} \times \vb{y}$ must be perpendicular to the vectors $\vb{x}$ and $\vb{y}$;
2. The magnitude of the cross product is
   $$
   \abs{\vb{x} \times \vb{y}}^2 = \abs{\vb{x}}^2 \abs{\vb{y}}^2 - {\pqty{\vb{x} \cdot \vb{y}}}^2 \,.
   $$
   This is similar to the definition $\abs{\vb{x} \times \vb{y}} = \abs{\vb{x}} \abs{\vb{y}} \sin \theta$. 
To retain these properties, there are restrictions to the geometry regarding orthogonality and rotations. In complex numbers, we notice that it encodes a two-dimensional space that rotates by multiplication: $\ds \Exp{\I \theta} \Exp{\I \phi} = \Exp{\I {\pqty{\theta + \phi}}}$. We can consider generalising the complex numbers to include more imaginary axes, so that we can look at rotations in higher dimensions. These new numbers systems are called hypercomplex numbers. 

It turns out that to get hypercomplex numbers, the multiplication of the imaginary numbers also have to follow some rules that matches with the definition of cross products. The simplest extension of complex numbers is the quaternion numbers, which has 1 real axis and 3 imaginary axes. The multiplications of the imaginary numbers correspond to the cross products in 3D space. The next generalisation brings us to octonion numbers, which has 1 real axis and 7 imaginary axes. This generalises the cross product to 7 dimensions. 

The next generalisation brings us to sedenion numbers, however it loses a property that prevents its imaginary multiplication from being a cross product. In fact, each generalisation loses a property. From real to complex numbers, we lost the well-ordering principle, so that we cannot always say one number is definitely larger or smaller than the other. From complex to quaternions, we lose commutativity. From quaternions to octonions, we lose associativity. From octonions to sedenions, we lose alternativity. 

Therefore, cross products can only be defined in 3 and 7 dimensions. The more proper way to derive this should be through Hurwitz's theorem, but that is beyond the scope of this discussion. 

## What are the benefits of using the East Coast metric or the West Coast metric?
The East Coast metric is defined as 
$$
\eta = \begin{pmatrix}
-1 & 0 & 0 & 0 \\
0 & 1 & 0 & 0 \\
0 & 0 & 1 & 0 \\
0 & 0 & 0 & 1
\end{pmatrix} \,,
$$
while the West Coast metric is defined as 
$$
\eta = \begin{pmatrix}
1 & 0 & 0 & 0 \\
0 & -1 & 0 & 0 \\
0 & 0 & -1 & 0 \\
0 & 0 & 0 & -1
\end{pmatrix} \,.
$$
There are no important differences between the two, they are just conventions. However, there may be some minor reasons why you would choose one over the other. 

For the East Coast metric, your spatial coordinates are all positive. The only negative component is the time coordinate. Therefore, in general relativity, when you use the metric to compute, you do not need to deal with a lot of negative signs. 

For the West Coast metric, your spacetime interval for objects within the light cone is positive. In fact, most of the objects you are dealing with will be positive. There is a certain aesthetic and satisfaction with dealing with positive numbers. 

All this just to say, as long as you keep your convention consistent, nothing essentially changes, just some quality-of-life things and preferences. \

## Why is the magnitude of the 4-vector invariant?
It is not an accident that the magnitude of the 4-vector is invariant. In fact, we define a 4-vector so that the magnitude is invariant. This is because the magnitude of the 4-vector should be a scalar quantity, and a scalar quantity should be invariant under different frame of reference. You can understand this from the point of view of 3D vectors. The length of the vector is invariant in different frames of reference. The spacetime interval is the generalisation of length.

## Why are the particles stationary after reactions in the center-of-mass frame?

You have to understand the context of the example. In the example, we are looking for the threshold energy for the reaction to happen. In other words, the minimum energy we need to make the reaction happen. Of course, the particles can move after the reaction, but extra energy is needed to generate the extra momentum for each of the particles, which will be larger than the minimum energy. The minimum energy is the one where the reaction happened but no extra energy is used for the momentum of the products.