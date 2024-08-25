---
title: Where does the energy-momentum relation come from?
tags:
  - blog
date: 2024-08-25
---
> [!info] 
> 
> This note is prepared for the students of PC3232 Nuclear Physics

In the lecture, we have used the energy–momentum conservation and 4-vectors. While the full theory of special relativity is beyond the scope of this module, this note serves to show where they come from for those who are interested. 

## Postulates of Special Relativity 
The entirety of special relativity comes from the following 2 postulates:
1. The speed of light is the same in all inertial frames.
2. The laws of physics are the same in all inertial frames. 
Everything else follows from these 2. Postulate 1 may sound weird, but it has been verified experimentally through the Michelson–Morley experiment. 
> [!info] 
> Think of inertial frames as frames that move at constant velocity.

## Time Dilation
To keep the speed of light constant in all inertial frames, time will have to alter to compensate for the motion of the inertial frame. This can be observed from the following thought experiment. Consider a light travelling vertically upwards from one mirror to another then returned
![[../raw/Where does the energy-momentum relation come from - rest frame time.excalidraw.png\| center \| 200 ]]
The distance between the 2 mirror is 
$$
d = \frac{c t }{2} \,.
$$
On the other hand, in an inertial frame that travels horizontally with velocity $\vb{u}$ 
![[../raw/Where does the energy-momentum relation come from - lab frame time.excalidraw.png\| center \| 500]]
The mirror would have travelled horizontally by $u t'$. By Pythagoras' theorem, 
$$
\begin{aligned}
d ={}& \sqrt{{\pqty{\frac{c t'}{2}}}^2 - {\pqty{\frac{u t'}{2}}}^2} \\
\frac{c t}{2} ={}& \sqrt{c^2 - u^2} \frac{t'}{2} \\
\therefore t ={}& \sqrt{1 - {\pqty{\frac{u}{c}}}^2} t' \,.
\end{aligned}
$$
By convention, we define
$$
\beta = \frac{u}{c} \qand \gamma = \frac{1}{\sqrt{1 - \beta^2}} \,.
$$
So, we have 
$$
\boxed{t' = \gamma t \,.} 
$$
Since 
$$
\begin{aligned}
u < c \Rightarrow{}& \beta < 1 \\
\Rightarrow{}& \gamma > 1 \\
\Rightarrow{}& t' > t \,.
\end{aligned}
$$
This is called time dilation. The time measured in the rest frame is the shortest. This is why particles that are travelling fast have longer lifetimes. 

> [!question] 
> Why did we consider a 2-way path rather than a 1-way path when they would have given the same answer?

## Length Contraction
In the previous example, since the frame travels in a direction perpendicular to the light direction, the vertical length is not affected. What if the frame travels along the same direction of the light? In the frame where the mirrors are at rest:
![[../raw/Where does the energy-momentum relation come from - rest frame length.excalidraw.png | center | 500]] 
In the frame where the mirror is moving:
![[../raw/Where does the energy-momentum relation come from - lab frame length.excalidraw.png | center]]
From time dilation: 
$$
\begin{aligned}
t_1' + t_2' ={}& \gamma t \\
\frac{d'}{c - u} + \frac{d'}{c + u} ={}& \gamma \frac{2 d}{c} \\
d' \frac{2 c}{c^2 - u^2} ={}& \gamma \frac{2 d}{c} \\
d' ={}& \gamma d {\pqty{1 - \beta^2}} \\
d' ={}& \frac{d}{\gamma} \,.
\, \mathllap{\mathrel{\boxed{\phantom{d' = \frac{d}{\gamma} \,.}}}}
\end{aligned}
$$
Since $\ds \gamma > 1 \Rightarrow d' < d$, the length in the rest frame $d$ is the longest, and hence length contraction in the moving frame. 

> [!question] 
> What happens if we only take half of the journey to derive length contraction? Do you get the same thing? 

## Lorentz Transformation
We have derived time dilation and length contraction for the specific situation above. How does the coordinate transform in general? Consider the same event observed from two frames of reference
![[../raw/Where does the energy-momentum relation come from - relative frames.excalidraw.png | center | 300]]
If we are an observer in the $O$ frame,
$$
\begin{aligned}
OM ={}& OO' + O'M\\
x ={}& u t + \frac{x'}{\gamma} \\
x' ={}& \gamma {\pqty{x - ut}} \,. 
\,\mathllap{\mathrel{\boxed{\phantom{x' = \gamma {\pqty{x - ut}} \,.}}}}
\end{aligned}
$$
If we are an observer in the $O'$ frame,
![[../raw/Where does the energy-momentum relation come from - relative from moving frame 2024-08-25 00.08.42.excalidraw.png | center | 300]] 
$$
\begin{aligned}
OM ={}& O O' + O' M\\
\frac{x}{\gamma} ={}& u t' + x' \\
={}& u t' + \gamma {\pqty{x - ut}} \\
u t' ={}& {\pqty{\frac{1}{\gamma} - \gamma}} x + \gamma u t\,.
\end{aligned}
$$
Since, 
$$
\begin{aligned}
\frac{1}{\gamma} - \gamma ={}& \sqrt{1 - \beta^2} - \frac{1}{\sqrt{1 - \beta^2}} \\
={}& \frac{1 - \beta^2 - 1}{\sqrt{1 - \beta^2}} \\
={}& - \frac{\beta^2}{\sqrt{1 - \beta^2}} \\
={}& - \gamma \beta^2 \,,
\end{aligned}
$$
we have 
$$
\begin{aligned}
u t' ={}& - \gamma \beta^2 x + \gamma u t \\
t' = {}& - \frac{\gamma u }{c^2} x + \gamma t \\
c t' ={}& \gamma {\pqty{c t - \gamma \beta x}} \,.
\, \mathllap{\mathrel{\boxed{\phantom{c t' = \gamma {\pqty{c t - \gamma \beta x}} \,.}}}}
\end{aligned}
$$
Combining the two equations, we have the transformation laws between 2 frames of reference:
$$
\begin{cases}
\begin{aligned}
c t' ={}& \gamma {\pqty{c t - \gamma \beta x}} \\
x' ={}& \gamma {\pqty{x - u t}}
\end{aligned} 
\end{cases}
$$
$$
\Rightarrow \boxed{\begin{pmatrix}
ct' \\ x'
\end{pmatrix} = \begin{pmatrix}
\gamma & - \gamma \beta \\
- \gamma \beta & \gamma
\end{pmatrix} \begin{pmatrix}
ct \\ x
\end{pmatrix}\,.} 
$$
This is the Lorentz transformation. For completeness, the transverse direction:
$$
\boxed{
\begin{aligned}
y' ={}& y\\
z' ={}& z
\end{aligned} 
}\,.
$$
Observe that to have a fixed speed of light in vacuum, the time and space coordinates are mixed. This is why in relativity, we consider the 4-vector, where time becomes a coordinate. To make their units consistent, we consider $ct$ instead of $t$, which incidentally provides a symmetric form to the Lorentz transformation matrix.

## Spacetime Interval
In classical physics, we know that when we change from one inertial frame to another, the distance between 2 locations remain the same.

However, in special relativity, we just saw that length contracts in different inertial frames. Then, what is the scalar quantity that measures the "distance" between 2 spacetime events? We return to the postulates and consider a spherical wave emitting from the centre in 2 frames:
![[../raw/Where does the energy-momentum relation come from - Spherical light 2024-08-25 00.21.54.excalidraw.png | center | 400]]
We have 
$$
{\pqty{c t}}^2 = x^2 + y^2 + z^2 \qand {\pqty{ct'}}^2 = x'^2 + y'^2 + z'^2 \,,
$$
which implies 
$$
0 = {\pqty{c t}}^2 - x^2 + y^2 + z^2 = {\pqty{ct'}}^2 - x'^2 + y'^2 + z'^2 \,.
$$
This suggests the candidate
$$
s^2 = {\pqty{c t}}^2 - x^2 + y^2 + z^2 
$$
as the "space-time distance." In fact, from the Lorentz transformation, considering only $x$ and $t$ for simplicity:
$$
\begin{aligned}
{\pqty{c t'}}^2 - x'^2 ={}& \begin{pmatrix}
c t' & -x'
\end{pmatrix} \begin{pmatrix}
c t' \\ x'
\end{pmatrix} \\
={}& \begin{pmatrix}
c t' & x' 
\end{pmatrix} \begin{pmatrix}
1 & 0 \\
0 & -1
\end{pmatrix} \begin{pmatrix}
c t' \\ x'
\end{pmatrix} \\
={}& \begin{pmatrix}
ct & x
\end{pmatrix} \underbrace{\begin{pmatrix}
\gamma & - \gamma \beta \\
- \gamma \beta & \gamma
\end{pmatrix} \begin{pmatrix}
1 & 0 \\
0 & -1
\end{pmatrix} \begin{pmatrix}
\gamma & - \gamma \beta \\
- \gamma \beta & \gamma
\end{pmatrix}}_{\begin{aligned}
={}& \begin{pmatrix}
\gamma & \gamma \beta \\
- \gamma \beta & - \gamma 
\end{pmatrix} \begin{pmatrix}
\gamma & - \gamma \beta \\
- \gamma \beta & \gamma
\end{pmatrix} \\
={}& \begin{pmatrix}
1 & 0 \\
0 & -1
\end{pmatrix} \underbrace{ \begin{pmatrix}
\gamma & \gamma \beta \\
\gamma \beta & \gamma
\end{pmatrix}\begin{pmatrix}
\gamma & - \gamma \beta \\
- \gamma \beta & \gamma
\end{pmatrix}}_{= \um \text{ because just reversing the frame velocity}}
\end{aligned}} \begin{pmatrix}
ct \\ x
\end{pmatrix} \\
={}& \begin{pmatrix}
ct & x
\end{pmatrix} \begin{pmatrix}
1 & 0 \\
0 & -1
\end{pmatrix} \begin{pmatrix}
ct \\ x
\end{pmatrix} \\
={}& {\pqty{ct}}^2 - x^2 \,.
\end{aligned}
$$
The value ${\pqty{ct}}^2 - x^2 = s^2$ is conserved. We call this the spacetime interval. In infinitesimal form:
$$
{\pqty{\dd{s}}}^2 = {\pqty{c \dd{t}}}^2 - {\pqty{\dd{x}}}^2 - {\pqty{\dd{y}}}^2 - {\pqty{\dd{z}}}^2 \,.
$$
For light, 
$$
{\pqty{\dd{s}}}^2 = 0 \,, \qq{as seen from above.} 
$$
For ordinary matter,
$$
\begin{aligned}
{\pqty{\dd{s}}}^2 >{}& 0 \\
\Rightarrow {\pqty{c \dd{t}}}^2 - {\pqty{\dd{x}}}^2 - {\pqty{\dd{y}}}^2 - {\pqty{\dd{z}}}^2 >{}& 0 \\
c^2 >{}& \frac{{\pqty{\dd{x}}}^2 + {\pqty{\dd{y}}}^2 + {\pqty{\dd{z}}}^2}{{\pqty{\dd{t}}}^2} = v^2 \\
\Rightarrow v <{}& c \,.
\end{aligned}
$$
The speed of ordinary matter is less than the speed of light $c$. 

In particular, at the rest frame, where the object is not moving, $\dd{x} = \dd{y} = \dd{z} = 0$, and 
$$
{\pqty{\dd{s}}}^2 = {\pqty{c \dd{\tau}}}^2 \,.
$$
We call $\tau$ proper time. If you measure time at the rest frame, you are actually measuring the spacetime interval.

> [!question] 
> Now do you understand why we reflect the light back to the starting point when deriving time dilation and length contraction? Why does the derivation still work for time dilation if we consider half the journey, but not for length contraction?

## 4-vectors
From Lorentz transformation and the discussion of spacetime interval, we recognise that time has become a coordinate that needs to be transformed between different frames. Therefore, instead of the usual 3D position vector, in special relativity, we speak of the spacetime 4-vector
$$
\utilde{x} = \begin{pmatrix}
ct \\ x \\ y \\ z
\end{pmatrix} \,,
$$
where I have used an undertilde to denote a 4-vector.

From the spacetime interval, the "distance" between 2 events in spacetime is given by
$$
\begin{aligned}
{\pqty{\dd{s}}}^2 ={}& {\pqty{c \dd{t}}}^2 - {\pqty{\dd{x}}}^2 - {\pqty{\dd{y}}}^2 - {\pqty{\dd{z}}}^2 \\
={}& \begin{pmatrix}
c \dd{t} & \dd{x} & \dd{y} & \dd{z} 
\end{pmatrix} \underbrace{\begin{pmatrix}
1 & 0 & 0 & 0 \\
0 & -1 & 0 & 0 \\
0 & 0 & -1 & 0 \\
0 & 0 & 0 & 1
\end{pmatrix}}_{\equiv \eta} \begin{pmatrix}
c \dd{t} \\ \dd{x} \\ \dd{y} \\ \dd{z}
\end{pmatrix}
\end{aligned}
$$
The quantity $\eta$ is called the Minkowski metric, which encodes how distances are measured in spacetime.

> [!info]-
> In relativity, you may encounter the convention of 
> $$
> \eta = \begin{pmatrix}
> -1 & 0 & 0 & 0 \\
> 0 & 1 & 0 & 0 \\
> 0 & 0 & 1 & 0 \\
> 0 & 0 & 0 & 1
> \end{pmatrix} \text{ (sometimes called East Coast metric)} \,,
> $$
> but in particle physics, the usual convention is 
> $$
> \eta = \begin{pmatrix}
> 1 & 0 & 0 & 0 \\
> 0 & -1 & 0 & 0 \\
> 0 & 0 & -1 & 0 \\
> 0 & 0 & 0 & -1
> \end{pmatrix} \text{ (sometimes called West Coast metric)} \,.
> $$
> The  difference is only at the sign of the spacetime interval. All physics remain the same.

Since the spacetime interval is the same in all inertial frames, note that (ignoring $y$ and $z$ for simplicity)
$$
s^2 = {\pqty{ct}}^2 - x^2 
$$
encodes a hyperbola. The underlying geometry is hyperbola. By the asymptotes of hyperbola, we observe that the object can never travel faster than the speed of light if it has a rest frame. 
![[../raw/Where does the energy-momentum relation come from - Hyperbolic Space 2024-08-25 10.41.57.excalidraw.png | center | 400]]
Because the geometry is hyperbolic, we can understand Lorentz transformation as a hyperbolic rotation, which can be written as
$$
\begin{pmatrix}
ct' \\ x'
\end{pmatrix} = \begin{pmatrix}
\cosh \rho & - \sinh \rho \\
- \sinh \rho & \cosh \rho
\end{pmatrix} \begin{pmatrix}
ct \\ x
\end{pmatrix} \,.
$$
where 
$$
\cosh \rho = \gamma \qand \sinh \rho = \gamma \beta \\
$$
$$
\boxed{\Rightarrow \tanh \rho = \beta \,.}
$$
$\rho$ is called rapidity. 

## 4-momentum 
While the 4-position is defined, one still needs to define the 4-momentum to perform relativistic kinematics. It is natural to use the classical expression
$$
\vb{p} = m \vb{v}.
$$
However, the 3-velocity in different frames are
$$
\begin{aligned}
\dv{x'}{t'} ={}& \frac{- \gamma u \dd{t} + \gamma \dd{x}}{\gamma \dd{t} - \gamma \frac{u}{c^2} \dd{x}} \\
={}& \frac{- \gamma u + \gamma \dv{x}{t}}{\gamma - \gamma \frac{u}{c^2} \dv{x}{t}} \\
v_x' ={}& \frac{v_x - u}{1 - \frac{u}{c^2} v_x} \,.\Aboxed{v_x' = \frac{v_x - u}{1 - \frac{u}{c^2} v_x} \,.} \\
\dv{y'}{t'} ={}& \frac{\dd{y}}{\gamma \dd{t} - \gamma \frac{u}{c^2} \dd{x}} \\
={}& \frac{\dv{y}{t}}{\gamma - \gamma \frac{u}{c^2} \dv{x}{t}} \\
v_y' ={}& \frac{v_y}{\gamma {\pqty{ 1- \frac{u}{c^2} v_x}}} \,. \Aboxed{v_y' = \frac{v_y}{\gamma {\pqty{ 1- \frac{u}{c^2} v_x}}} \,.}
\end{aligned}
$$
If we naively define, then
$$
\begin{aligned}
\utilde{v'} ={}& \dv{\utilde{x'}}{t'}\\
={}& \dv{}{t'} \begin{pmatrix}
c t' \\ x' \\ y' \\ z'
\end{pmatrix} \\
={}& \begin{pmatrix}
c \\ v_x' \\ v_y' \\ v_z'
\end{pmatrix} \\
={}& \begin{pmatrix}
c {\pqty{1 - \beta \frac{v_x}{c}}} \\ v_x - u \\ \frac{v_y}{\gamma} \\ \frac{v_z}{\gamma}
\end{pmatrix} \frac{1}{1 - \beta \frac{v_x}{c}} \,.
\end{aligned} 
$$
If we take an inner product following the rules of spacetime interval:
$$
\begin{aligned}
\utilde{v'} \cdot \utilde{v'} \equiv{}& \begin{pmatrix}
c & v_x' & v_y' & v_z'
\end{pmatrix} \begin{pmatrix}
1 & 0 & 0 & 0\\
0 & -1 & 0 & 0 \\
0 & 0 & -1 & 0 \\
0 & 0 & 0 & -1 
\end{pmatrix} \begin{pmatrix}
c \\ v_x' \\ v_y' \\ v_z'
\end{pmatrix} \\
={}& c^2 - v_x'^2 - v_y'^2 - v_z'^2 \\
={}& c^2 - \frac{1}{{\pqty{1 - \beta \frac{v_x}{c}}}^2} {\bqty{ {\pqty{v_x - u}}^2 - \frac{v_y^2}{\gamma^2} - \frac{v_z^2}{\gamma^2} }} \\
\neq{}& c^2 - v_x^2 - v_y^2 - v_z^2 \,,
\end{aligned}
$$
its norm is not conserved as expected of a scalar quantity. This is because time $t$ changes with different frames of reference. We need a "time quantity" that does not change across different frame of reference.

Recall that proper time measures the spacetime interval, which is invariant across different frames. Naturally, we define
$$
\begin{aligned}
\utilde{v} \equiv{}& \dv{\utilde{x}}{\tau} \\
={}& \dv{}{\tau} \begin{pmatrix}
ct \\ x \\ y \\ z 
\end{pmatrix} \\
={}& \dv{t}{\tau} \dv{}{t} \begin{pmatrix}
ct \\ x \\ y \\ z
\end{pmatrix} \\
\utilde{v} ={}& \gamma \begin{pmatrix}
c \\ \vb{v} 
\end{pmatrix} \,. \Aboxed{\utilde{v} = \gamma \begin{pmatrix}
c \\ \vb{v} 
\end{pmatrix} \,.}
\end{aligned}
$$
Its norm is 
$$
\begin{aligned}
\utilde{v} \cdot \utilde{v} \equiv{}& \gamma \begin{pmatrix}
c & \vb{v} 
\end{pmatrix} \begin{pmatrix}
1 & 0 & 0 & 0\\
0 & -1 & 0 & 0 \\
0 & 0 & -1 & 0 \\
0 & 0 & 0 & -1 
\end{pmatrix} \gamma \begin{pmatrix}
c \\ \vb{v}
\end{pmatrix} \\
={}& \gamma^2 {\pqty{c^2 - \vb{v}^2}} \\
={}& c^2 \frac{1 - \beta^2}{1 - \beta^2} \\
\utilde{v} \cdot \utilde{v} ={}& c^2 \,, \Aboxed{\utilde{v} \cdot \utilde{v} = c^2 \,,}
\end{aligned}
$$
which is invariant in all frames of references. 

Hence, following classical mechanics, we define the 4-momentum
$$
\begin{aligned}
\utilde{p} ={}& m \utilde{v} \\
={}& m \gamma \begin{pmatrix}
c \\ \vb{v}
\end{pmatrix} \\
={}& \begin{pmatrix}
\gamma m c \\ \vb{p}
\end{pmatrix} \,,
\end{aligned}
$$
where its norm is 
$$
\boxed{\utilde{p} \cdot \utilde{p} = m^2 \utilde{v} \cdot \utilde{v} = m^2 c^2 \,.}
$$
The 4-momentum also implies the relativistic momentum
$$
\boxed{\vb{p} = \gamma m \vb{v} \,.}
$$
What is the "time-component" of the 4-momentum? What is $\gamma m c$? To understand it, we consider its non-relativistic limit, where $\beta \ll 1$: 
$$
\begin{aligned}
\gamma m c = {}& \frac{mc}{\sqrt{1 - \beta^2}} \\
={}& mc {\pqty{1 + \frac{1}{2} \beta^2}} + \order{\beta^4} \\
={}& mc + \frac{1}{2} \frac{mv^2}{c} \,.
\end{aligned}
$$
The second term is the kinetic energy in classical mechanics, which shows that 
$$
\gamma m c = \frac{E}{c} \,.
$$
Hence, the norm of 4-momentum implies
$$
\begin{aligned}
m^2 c^2 ={}& \utilde{p} \cdot \utilde{p} \\
={}& {\pqty{\frac{E}{c}}}^2 - \vb{p}^2 \\
E^2 ={}& {\pqty{m c^2}}^2 + {\pqty{\vb{p} c}}^2 \,. \Aboxed{E^2 = {\pqty{m c^2}}^2 + {\pqty{\vb{p} c}}^2 \,.}
\end{aligned}
$$
This is where the energy–momentum conservation comes from. 

> [!info]-
> An alternative way to identify $E$ is the following. We had 
> $$
> \utilde{v} = \gamma \begin{pmatrix}
> c \\ \vb{v}
> \end{pmatrix} \,.
> $$
> From Newton's equation, we define 4-force
> $$
> \begin{aligned}
> \utilde{f} \equiv{}& \dv{}{\tau} \utilde{p} \\
> ={}& m \dv{\utilde{v}}{\tau} \equiv m \utilde{a} \,.
> \end{aligned}
> $$
> Since 
> $$
> \begin{aligned}
> \utilde{v} \cdot \utilde{v} ={}& c^2 \\
> \dv{}{\tau} {\pqty{\utilde{v} \cdot \utilde{v}}} ={}& 0 \\
> 2 \utilde{a} \cdot \utilde{v} ={}& 0 \\
> \Rightarrow \utilde{v} \cdot \utilde{a} ={}& 0 \,.
> \end{aligned}
> $$
> Then, 
> $$
> \begin{aligned}
> \utilde{f} \cdot \utilde{v} = m \utilde{a} \cdot \utilde{v} ={}& 0 \\
> \begin{pmatrix}
> \dv{p_0}{\tau} & \dv{\vb{p}}{\tau} 
> \end{pmatrix}
> \begin{pmatrix}
> 1 & 0 & 0 & 0\\
> 0 & -1 & 0 & 0 \\
> 0 & 0 & -1 & 0 \\
> 0 & 0 & 0 & -1 
> \end{pmatrix} \gamma \begin{pmatrix}
> c \\ \vb{v}
> \end{pmatrix} ={}& 0 \\
> \gamma c \dv{p_0}{\tau} - \gamma \vb{v} \cdot \dv{\vb{p}}{\tau} ={}& 0 \\
> \dv{p_0}{\tau} ={}& \frac{\vb{v}}{c} \cdot \vb{F} \,.
> \end{aligned}
> $$
> Since $\vb{F} \cdot \vb{v}$ is power from classical mechanics,
> $$
> \begin{aligned}
> \dv{p_0}{\tau} ={}& \frac{1}{c} \dv{E}{\tau}\\
> ={}& \dv{}{\tau} {\pqty{\frac{E}{c}}} \,.
> \end{aligned}
> $$
> Hence, we identify $p_0$ as $\ds \frac{E}{c}$.



> [!note]
> For the handwritten PDF notes: [[../raw/SpecialRelativity.pdf|Special Relativity]]  

