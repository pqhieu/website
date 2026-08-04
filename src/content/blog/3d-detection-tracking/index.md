---
title: "Making of an AV: 3D Detection-Tracking"
description: "A placeholder post for the blog."
date: 2026-08-02
draft: True
---

In this series, I will go in depth about the internal systems inside an autonomous vehicle (AV). Of course it would be ML heavy, but I prefer to approach in a different angle. Rather than focus on the model and algorithms, I'd like to discuss more about system design, tradeoffs, and common pitfalls.

## Modeling

In the past, detection and tracking were considered separated problems. This maps to two (or multiple) teams building their own model/pipeline. However, I'd argue that treating them as the same problem would provide a lot of benefits, both from modeling and performance standpoint.

| Symbol | Definition                     |
|--------|--------------------------------|
| $s_t$  | Sensor observation at time $t$ |
| $z_t$  | Measurement at time $t$        |
| $x_t$  | State at time $t$              |

### Observation

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vulputate ligula sed sapien suscipit, eu cursus lacus interdum. Nulla facilisi. Morbi finibus volutpat massa, non vulputate arcu tristique at. Suspendisse non consequat dui. Integer efficitur malesuada arcu, sit amet pulvinar dui luctus eu.

### Update

Nam porttitor, tortor id malesuada dictum, justo nibh porta purus, non consequat est ligula vitae dui. Vestibulum rutrum lorem in ipsum varius, vel consectetur ex feugiat. Nunc volutpat risus sed nibh venenatis, eu feugiat mauris posuere. Sed sit amet suscipit turpis. Etiam sed fermentum nisl, sit amet viverra risus.

### Prediction

Nam porttitor, tortor id malesuada dictum, justo nibh porta purus, non consequat est ligula vitae dui. Vestibulum rutrum lorem in ipsum varius, vel consectetur ex feugiat. Nunc volutpat risus sed nibh venenatis, eu feugiat mauris posuere. Sed sit amet suscipit turpis. Etiam sed fermentum nisl, sit amet viverra risus.

## Literature

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer feugiat, libero et feugiat efficitur, risus sem pulvinar nibh, vitae luctus neque massa eget nisl. Donec et lectus at libero vulputate posuere. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.

Sed non mauris vel justo vestibulum laoreet. In hendrerit, mi vel consequat faucibus, erat lorem gravida risus, in faucibus nulla nibh sed arcu. Aliquam erat volutpat. Mauris varius faucibus lorem, at viverra mauris pellentesque at. Cras ultrices erat sit amet est tristique, sed aliquet arcu consequat.

## Labeling

### Motion compensation

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer feugiat, libero et feugiat efficitur, risus sem pulvinar nibh, vitae luctus neque massa eget nisl. Donec et lectus at libero vulputate posuere. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.

Sed non mauris vel justo vestibulum laoreet. In hendrerit, mi vel consequat faucibus, erat lorem gravida risus, in faucibus nulla nibh sed arcu. Aliquam erat volutpat. Mauris varius faucibus lorem, at viverra mauris pellentesque at. Cras ultrices erat sit amet est tristique, sed aliquet arcu consequat.

### Visibility

Sed non mauris vel justo vestibulum laoreet. In hendrerit, mi vel consequat faucibus, erat lorem gravida risus, in faucibus nulla nibh sed arcu. Aliquam erat volutpat. Mauris varius faucibus lorem, at viverra mauris pellentesque at. Cras ultrices erat sit amet est tristique, sed aliquet arcu consequat.
