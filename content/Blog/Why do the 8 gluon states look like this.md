---
title: Why do the 8 gluon states look like this?
tags:
  - blog
date: 2024-08-24
---
> [!info] 
> 
> This note is prepared for the students of PC3232 Nuclear Physics

The question is how do we get the 8 gluon states? Also, why does it look as the way it did?

Let's start with observation. We observe that baryons are stable and are made up of 3 quarks. We postulated that there are 3 colour charges, and baryons are stable if they are colourless:
![[../raw/Why do the 8 gluon states look like this - 3 quarks.excalidraw.png\| center \| 200]]
The baryons are held together by the strong interaction, medicated through the exchange of gluons. During this exchange, the colour balance should be maintained. The simplest interaction is then made up of a colour-anticolour pair. For example:
![[../raw/Why do the 8 gluon states look like this - quark changes.excalidraw.png\|center]]

While the colour changes, the overall colour remains neutral. On the surface, because there are 3 colour charges, we expect $3 \times 3 = 9$ colour-anticolour pairs. However, for combinations like $r \bar{r}$ 
![[../raw/Why do the 8 gluon states look like this - red antired.excalidraw.png\|center]]
even if the total colour remains neutral, you cannot interact with other colour charges. Therefore, one may expect $9 -3 = 6$ possibilities based on this consideration
$$
\begin{matrix}
b \bar{r} & r \bar{b} & r \bar{g}\\
g \bar{r} & g \bar{b} & b \bar{g}
\end{matrix} 
$$
These 6 states are independent of each other. To check that they are orthogonal to each other, we first consider a representation for these gluons.

Because the structure of the gluon state is a colour-anticolour pair, we can represent them by a $3 \times 3$ matrix
![[../raw/Why do the 8 gluon states look like this - matrix.excalidraw.png \| center \| 200]] 

For example:
$$
b \bar{r} = \begin{pmatrix}
0 & 0 & 0 \\
1 & 0 & 0 \\
0 & 0 & 0
\end{pmatrix} \qand 
r \bar{b} = \begin{pmatrix}
0 & 1 & 0 \\ 
0 & 0 & 0 \\
0 & 0 & 0
\end{pmatrix} \,.
$$
To check that they are orthogonal, we compute its inner product
$$
\begin{aligned}
\tr {\Bqty{{\pqty{b \bar{r}}}^\dagger {\pqty{r \bar{b}}}}} ={}& \tr {\Bqty{\begin{pmatrix}
0 & 0 & 0 \\
1 & 0 & 0 \\
0 & 0 & 0
\end{pmatrix}  \begin{pmatrix}
0 & 1 & 0 \\ 
0 & 0 & 0 \\
0 & 0 & 0
\end{pmatrix}}} \\
={}& 0 \,.
\end{aligned}
$$
While these 6 states are orthogonal, they are not hermitian. To form hermitian matrices, we borrow our knowledge of Pauli matrices, and form orthogonal hermitian states. Using $\sigma_x$ and $\sigma_y$ for $r \bar{b}$ and $b \bar{r}$, 
$$
\lambda_1 = \begin{pmatrix}
0 & 1 & 0 \\
1 & 0 & 0 \\
0 & 0 & 0 
\end{pmatrix}
\qand 
\lambda_2 = \begin{pmatrix}
0 & - \I & 0\\
\I & 0 & 0 \\
0 & 0 & 0 
\end{pmatrix} \,.
$$
Using $\sigma_x$ and $\sigma_y$ for $r \bar{g}$ and $g \bar{r}$, 
$$
\lambda_4 = \begin{pmatrix}
0 & 0 & 1 \\
0 & 0 & 0 \\
1 & 0 & 0 
\end{pmatrix}
\qand 
\lambda_5 = \begin{pmatrix}
0 & 0 & - \I \\
0 & 0 & 0 \\
\I & 0 & 0 
\end{pmatrix} \,.
$$
Using $\sigma_x$ and $\sigma_y$ for $b \bar{g}$ and $b \bar{r}$, 
$$
\lambda_6 = \begin{pmatrix}
0 & 0 & 0 \\
0 & 0 & 1 \\
0 & 1 & 0 
\end{pmatrix}
\qand 
\lambda_5 = \begin{pmatrix}
0 & 0 & 0 \\
0 & 0 & - \I \\
0 & \I & 0 
\end{pmatrix} \,.
$$

This gives the 6 gluon states:
$$
\begin{matrix}
\ds \frac{r \bar{b} + b \bar{r}}{\sqrt{2}} & \ds -\I \frac{r \bar{b} - b \bar{r}}{\sqrt{2}} \\
\ds \frac{r \bar{g} + g \bar{r}}{\sqrt{2}} & \ds -\I \frac{r \bar{g} - g \bar{r}}{\sqrt{2}} \\
\ds \frac{b \bar{g} + g \bar{b}}{\sqrt{2}} & \ds -\I \frac{b \bar{g} - g \bar{b}}{\sqrt{2}} \\
\end{matrix}
$$
> [!info]-
> When constructing the gluon states above, I have ignored the normalisation constant. To do that, for example:
> $$
> \begin{aligned}
> \lambda_1 ={}& \mathcal{N} \begin{pmatrix}
> 0 & 1 & 0 \\
> 1 & 0 & 0 \\
> 0 & 0 & 0 
> \end{pmatrix}\\
> \tr {\Bqty{\lambda_1^\dagger \lambda_1}} ={}& \mathcal{N}^2 \tr {\Bqty{\begin{pmatrix}
> 0 & 1 & 0 \\
> 1 & 0 & 0 \\
> 0 & 0 & 0 
> \end{pmatrix}\begin{pmatrix}
> 0 & 1 & 0 \\
> 1 & 0 & 0 \\
> 0 & 0 & 0 
> \end{pmatrix}}} \\
> 1 ={}& \mathcal{N}^2 \tr {\Bqty{\begin{pmatrix}
> 0 & 1 & 0 \\
> 1 & 0 & 0 \\
> 0 & 0 & 0 
> \end{pmatrix}}} \\
> \mathcal{N} ={}& \frac{1}{\sqrt{2}} \,.
> \end{aligned}
> $$

> [!info]- 
> The choice of number for $\lambda$s follows the usual convention for Gell-Mann matricies, that is why we skipped some numbers.

Since we have made use of $\sigma_x$ and $\sigma_y$, what about the $\sigma_z$ analogue?
$$
\begin{pmatrix}
1 & 0 & 0 \\
0 & -1 & 0 \\
0 & 0 & 0
\end{pmatrix}\,, \quad 
\begin{pmatrix}
1 & 0 & 0 \\
0 & 0 & 0 \\
0 & 0 & -1
\end{pmatrix}\,, \quad 
\begin{pmatrix}
0 & 0 & 0 \\
0 & 1 & 0 \\
0 & 0 & -1
\end{pmatrix}\,? 
$$
These are not independent. For example,
$$
-\begin{pmatrix}
1 & 0 & 0 \\
0 & -1 & 0 \\
0 & 0 & 0
\end{pmatrix} + \begin{pmatrix}
1 & 0 & 0 \\
0 & 0 & 0 \\
0 & 0 & -1
\end{pmatrix} = \begin{pmatrix}
0 & 0 & 0 \\
0 & 1 & 0 \\
0 & 0 & -1
\end{pmatrix} \,.
$$ 
What if we take only 2 of them? That is also not allowed because they are not orthogonal
$$
\begin{aligned}
\tr {\Bqty{ \begin{pmatrix}
1 & 0 & 0 \\
0 & -1 & 0 \\
0 & 0 & 0 
\end{pmatrix} \begin{pmatrix}
1 & 0 & 0 \\
0 & 0 & 0 \\
0 & 0 & -1
\end{pmatrix}}} ={}& \tr {\Bqty{\begin{pmatrix}
1 & 0 & 0 \\
0 & 0 & 0 \\
0 & 0 & 0 
\end{pmatrix}}} \\
={}& 1
\end{aligned}
$$ 
However, we can retain one of them 
$$
\lambda_3 = \begin{pmatrix}
1 & 0 & 0 \\
0 & -1 & 0 \\
0 & 0 & 0
\end{pmatrix} \rightarrow \frac{r \bar{r} - b \bar{b}}{\sqrt{2}} \,.
$$ 
Learning from Pauli matrices, we then still need one more traceless hermitian matrix. Since the off-diagonal entries are already covered by the 6 other gluon states, this remaining one must be diagonal and orthogonal to $\lambda_3$. Suppose
$$
\lambda_8 = \begin{pmatrix}
a & 0 & 0 \\
0 & b & 0 \\
0 & 0 & c
\end{pmatrix} \,.
$$
To be traceless, we require $a + b + c = 0$. To be orthogonal to $\lambda_3$ 
$$
\begin{aligned}
\tr {\Bqty{\begin{pmatrix}
1 & 0 & 0 \\ 
0 & -1 & 0 \\
0 & 0 & 0 
\end{pmatrix} \begin{pmatrix}
a & 0 & 0 \\
0 & b & 0 \\
0 & 0 & c
\end{pmatrix}}} ={}& \tr {\Bqty{\begin{pmatrix}
a & 0 & 0 \\
0 & -b & 0 \\
0 & 0 & 0 
\end{pmatrix}}} \\
0 ={}& a - b  \\
\Rightarrow a ={}& b \,.
\end{aligned}
$$
Hence, we have 
$$
\begin{aligned}
2 a + c ={}& 0  \\
c ={}& - 2 a \,.
\end{aligned}
$$
Then, 
$$
\lambda_8 = a \begin{pmatrix}
1 & 0 & 0 \\
0 & 1 & 0 \\
0 & 0 & -2
\end{pmatrix} \,,
$$
where $a$ can be fixed by normalisation. This gives us the final gluon state 
$$
\lambda_8 \rightarrow \frac{r \bar{r} + b \bar{b} - 2 g \bar{g}}{\sqrt{6}} \,.
$$
Finally, to make the set complete, just like for Pauli matrices, we need the identity
$$
\text{``}\lambda_9\text{"} = \begin{pmatrix}
1 & 0 & 0 \\
0 & 1 & 0 \\
0 & 0 & 1
\end{pmatrix}
$$
to recover the $3 \times 3$ degrees of freedom initially. This reproduces the gluon state
$$
\text{``}\lambda_9\text{"} \rightarrow \frac{r \bar{r} + b \bar{b} + g \bar{g}}{\sqrt{3}} \,.
$$

## Colour or Colourless
There were some questions about the colour of $\lambda_3$ and $\lambda_8$. Since it seems as if they are colourless. However, notice that these are superposition states, which may produce coloured state.

If t his is a bit abstract, recall from your quantum mechanics lecture about 2 spins. The singlet state
$$
\frac{\ket{\uparrow \downarrow} - \ket{\downarrow \uparrow}}{\sqrt{2}} 
$$
has spin 0, but one of the the triplet states
$$
\frac{\ket{\uparrow \downarrow} + \ket{\downarrow \uparrow}}{\sqrt{2}}
$$
has spin 1, even though it does not seem like it.

To see that they are coloured, remember that $\lambda_3$ is constructed from $\sigma_z$. So, we can rotate in the colour charge space so that in an alternative basis, it because $\sigma_x$. More explicitly, consider the transformation
$$
T = \begin{pmatrix}
\frac{1}{\sqrt{2}} & \frac{1}{\sqrt{2}} & 0 \\
\frac{1}{\sqrt{2}} & - \frac{1}{\sqrt{2}} & 0 \\
0 & 0 & 1
\end{pmatrix} \,.
$$
> [!info]-
> This came from the more general transformation
> $$
> T = \begin{pmatrix}
> \cos \theta & \sin \theta & 0 \\
> \sin \theta & - \cos \theta & 0 \\
> 0 & 0 & 1
> \end{pmatrix} \,,
> $$
> with $\ds \theta = \frac{\pi}{4}$.

Then, after the transformation
$$
\begin{aligned}
T \lambda_3 T^\dagger ={}& \begin{pmatrix}
0 & 1 & 0 \\
1 & 0 & 0 \\
0 & 0 & 0
\end{pmatrix} \equiv \lambda_1' \rightarrow \frac{r' \bar{b}' + b' \bar{r}'}{\sqrt{2}} \,.
\end{aligned}
$$
In this basis, it has a colour, so it is not colourless overall. If you are confused, recall the analogy of triplet state. It looks spinless in this representation, but if you rotate your coordinate system, it is not spinless.

For $\lambda_8$, consider the rotation
$$
R = \begin{pmatrix}
\cos \theta & \sin \theta & 0 \\
\sin \theta & - \cos \theta & 0 \\
0 & 0 & 1
\end{pmatrix} \begin{pmatrix}
1 & 0 & 0 \\
0 & \cos \phi & \sin \phi \\
0 & \sin \phi & - \cos \phi
\end{pmatrix} \,,
$$
where $\ds \theta = \frac{\pi}{4}$ and $\ds \phi = \arctan \sqrt{2}$. Then,
$$
R = \begin{pmatrix}
\frac{1}{\sqrt{2}} & \frac{1}{\sqrt{6}} & \frac{1}{\sqrt{3}} \\
\frac{1}{\sqrt{2}} & - \frac{1}{\sqrt{6}} & -\frac{1}{\sqrt{3}} \\
0 & \sqrt{\frac{2}{3}} & \frac{1}{\sqrt{3}} \\
\end{pmatrix} \,,
$$
and 
$$
R \lambda_8 R^\dagger = \begin{pmatrix}
0 & 1 & 1 \\
1 & 0 & -1 \\
1 & -1 & 0
\end{pmatrix} \,,
$$
which is made up of only coloured states.

It is then easy to see why "$\lambda_9$" is colourless. Since "$\lambda_9$" is made from identity:
$$
R \text{``}\lambda_9\text{"} R^\dagger = R R^\dagger \text{``}\lambda_9\text{"} = \text{``}\lambda_9\text{"} \,.
$$
It cannot be rotate into a coloured state.

What is the problem with colourless state? We know that colourless states are stable, and if this gluon exists, then the strong force will be long range, which does not match with observation. Therefore, this gluon state does not exist.

> [!info]- 
> Much like in the spin singlet case, where the combination has an effectively zeros pin, we call the "$\lambda_9$" state the colour singlet state. The rest of the 8 states are called colour octet states.

> [!info]- 
> The $\lambda$s are the $3 \times 3$ analogue of the Pauli matrices, called the Gell-Mann matrices, where "$\lambda_9$" is not part of the set. That is why I kept the quotation marks for "$\lambda_9$". 

## Meson States
What about the meson states? Since $\lambda_1, \, \lambda_2, \, \dots, \, \lambda_8$ are coloured, we should not be able to construct the colourless state $r \bar{r}$. Let's verify this: 
$$
\sum_{i=1}^8 x_i \lambda_i = \begin{pmatrix}
x_3 + x_8 & x_1 - \I x_2 & x_4 - \I x_5 \\
x_1 + \I x_2 & -x_3 + x_8 & x_6 - \I x_7 \\
x_4 + \I x_5 & x_6 + \I x_7 & -2 x_8
\end{pmatrix} \,.
$$
We want it to be 
$$
r \bar{r} \rightarrow \begin{pmatrix}
1 & 0 & 0 \\
0 & 0 & 0 \\
0 & 0 & 0 
\end{pmatrix} \,.
$$
We must have 
$$
\begin{cases}
\begin{aligned}
x_3 + x_8 ={}& 1 \\
x_8 ={}& x_3 \\
x_8 ={}& 0 
\end{aligned} \,,
\end{cases}
$$
which is a contradiction. We can only get $r \bar{r}$ with "$\lambda_9$": 
$$
\frac{1}{6} \lambda_8 + \frac{1}{3} \text{``}\lambda_9\text{"} \rightarrow r \bar{r} \,.
$$
The same goes for other meson states. 


> [!note]
> For the handwritten PDF notes: [[../raw/GluonStates.pdf|Gluon States]] 
