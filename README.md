# BLAST

![Deploy badge](https://github.com/anvass/blast/actions/workflows/deploy.yml/badge.svg)

[BLAST](https://ru.wikipedia.org/wiki/BLAST) (англ. Basic Local Alignment Search Tool) — это зачаток инструмента для визуализации выравнивания аминокислотных последовательностей.

<img src="./docs/assets/preview.png" alt="Preview" width="640"/>

## Как пользоваться

1. Оба поля обязательны для заполнения и могут принимать только латинские буквы аминокислот (A, R, N, D, C, E, Q, G, H, I, L, K, M, F, P, S, T, W, Y, V) и символ `-`. Также оба значения должны быть одинаковыми по длине.<br>Пример: аминокислотная последовательность (гемоглобин из мангуста) в буквенном представлении:
   `VLSPADKTNIKASWEKIGSHGGEYGAEALERTFLCFPTTKTYFPHFDLSHGSAQVKAHGKKVADALTNAVGHLDDLPGALSALSDLHAYKLRVDPVNFKLLSHCLLVTLASHHPAEFT`

2. После валидного заполнения формы, кнопка для получения визуализации последовательностей станет доступна.

3. При визуализации в первой введенной последовательности каждая буква окрашивается фоном в свой цвет в соответствии со свойствами аминокислот<br>
   <img src="./docs/assets/color_scheme.png" alt="Цвета аминокислот" width="320"/><br>
   Во второй последовательности фоном выделены только те буквы, которые отличаются от соответствующей по индексу буквы в первой последовательности.<br><br>Для удобства сравнения строки (или части строк, если последовательность длинная) всегда располагаются друг под другом.

4. На странице сохранен встроенный поиск по части последовательности (при помощи cmd+F или ctrl+F).

5. Также есть возможность копирования: при выделении мышкой части последовательности она вставится в буфер обмена и вы получите соответствующее всплывающее уведомление о том, что последовательность скопирована. Уведомление пропадет через 1 секунду после появления.

## Технологии

[![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![MUI](https://img.shields.io/badge/MUI-%230081CB.svg?style=for-the-badge&logo=mui&logoColor=white)](https://mui.com/)
[![React Hook Form](https://img.shields.io/badge/React%20Hook%20Form-%23EC5990.svg?style=for-the-badge&logo=reacthookform&logoColor=white)](https://react-hook-form.com/)
[![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)](https://vite.dev/)

## Планы по расширению функционала
[ISSUES](https://github.com/anvass/blast/issues)
