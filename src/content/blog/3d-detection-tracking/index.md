---
title: "Making of an AV: 3D Detection-Tracking"
description: "A placeholder post for the blog."
date: 2026-08-02
draft: True
---

In this series, I will go in depth about the internal systems inside an autonomous vehicle (AV). However, instead of emphasizing on the ML modeling or algorithms, I would like to approach the topic from a system design perspective.

## Modeling

Historically, detection and tracking are used to live in separated modules in an AV system. This follows the classic *tracking-by-detection paradigm* (reference), where detections can come from one (or multiple sources), and then spatio-temporally associated into tracks.

In recent years, with the push for an end-to-end architecture in AV, there has also been a shift in detection-tracking to be more end-to-end.

| Symbol | Definition                     |
|--------|--------------------------------|
| $s_t$  | Sensor observation at time $t$ |
| $z_t$  | Measurement at time $t$        |
| $x_t$  | State at time $t$              |

### Observation


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
