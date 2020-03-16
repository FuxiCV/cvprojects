---
pageClass: home-page
# some data for the components

name: Yi Yuan
profile: /profile.jpg

socials:
  - title: github
    icon: "/icons/github.svg"
    link: https://github.com/yiyuan1991
  - title: email
    icon: "/icons/email.svg"
    link: 'mailto:yyshawn@163.com'

# cv: https://en.wikipedia.org/wiki/Harry_Potter
bio: CV Reasearcher at Netease Fuxi AI Lab
# email: yyshawn (at) 163 (dot) com
---

<ProfileSection :frontmatter="$page.frontmatter" />

## About Me

I am a Computer Vision Researcher at Netease Fuxi AI Lab as of 2017 after receiving my PhD from Wuhan University. My research interests are in game related computer vision and deep learning.

Welcome to send your resume to apply for an internship.

<!--

## Education & Experiences

- **Hogwarts School of Witchcraft and Wizardry** <br/>
Sept 1991 - 1997
-->

## Publications

<ProjectCard image="/projects/8.jpg" hideBorder=true>

  **Towards High-Fidelity 3D Face Reconstruction from In-the-Wild Images Using Graph Convolutional Networks**

  Jiangke Lin, **Yi Yuan\***, Tianjia Shao, Kun Zhou

  Computer Vision and Pattern Recognition (CVPR), 2020
  
  [[PDF](https://arxiv.org/pdf/2003.05653.pdf)] [[arXiv](https://arxiv.org/abs/2003.05653)]

</ProjectCard>

<ProjectCard image="/projects/7.jpg" hideBorder=true>

  **Fast and Robust Face-to-Parameter Translation for Game Character Auto-creation**
  
  Tianyang Shi, Zhengxia Zou, **Yi Yuan\***, Changjie Fan

  the Association for the Advance of Artificial Intelligence (AAAI), 2020

</ProjectCard>

<ProjectCard image="/projects/6.jpg" hideBorder=true>

  **FDN: Feature Decoupling Network for Head Pose Estimation**
  
  Hao Zhang, Mengmeng Wang, Yong Liu, **Yi Yuan**

  the Association for the Advance of Artificial Intelligence (AAAI), 2020

</ProjectCard>

<ProjectCard image="/projects/5.jpg" hideBorder=true>

  **Face-to-Parameter Translation for Game Character Auto-Creation**
  
  Tianyang Shi, **Yi Yuan\***, Changjie Fan, Zhengxia Zou, Zhenwei Shi, Yong Liu

  International Conference on Computer Vision (ICCV), 2019

  [[PDF](https://arxiv.org/pdf/1909.01064.pdf)] [[arxiv](https://arxiv.org/abs/1909.01064)]

</ProjectCard>

<ProjectCard image="/projects/4.jpg" hideBorder=true>

  **NeuroSkinning: Automatic Skin Binding for Production Characters with Deep Graph Networks**
  
  Lijuan Liu, Youyi Zheng, Di Tang, **Yi Yuan**, Changjie Fan, Kun Zhou

  ACM Transactions on Graphics (SIGGRAPH), 2019 (Oral)

  [[PDF](https://nos.netease.com/mg-file/mg/neteasegamecampus/art_works/20190624/201906242016238583.pdf)] [[Data](http://fuxi.163.com/thesis/neuro.html)] 

</ProjectCard>

<ProjectCard image="/projects/3.jpg" hideBorder=true>

  **Random Forest and Objected-Based Classification for Forest Pest Extraction from UAV Aerial Imagery**
  
  **Yi Yuan**, X. Hu

  ISPRS, 2016 (Oral)

  [[PDF](https://www.int-arch-photogramm-remote-sens-spatial-inf-sci.net/XLI-B1/1093/2016/)]

</ProjectCard>

<ProjectCard image="/projects/2.jpg" hideBorder=true>

  **Deep-Learning-Based Classification for DTM Extraction from ALS Point Cloud**
  
  X. Hu, **Yi Yuan\***

  Remote Sensing, 2016

  [[PDF](https://www.mdpi.com/2072-4292/8/9/730/htm)]

</ProjectCard>

<ProjectCard image="/projects/1.jpg" hideBorder=true>

  **Bag-of-Words and Object-Based Classification for Cloud Extraction From Satellite Imagery**
  
  **Yi Yuan**, X. Hu

  JSTARS, 2015

  [[PDF](https://ieeexplore.ieee.org/document/7112467)]

</ProjectCard>

## Awards & Honors

- **Excellent Graduate Student of Wuhan University, 2017**

- **National Scholarship for Doctoral Students, 2016**

- **National Scholarship for Doctoral Students, 2015**

<!-- Custom style for this page -->

<style lang="stylus">

.theme-container.home-page .page
  font-size 14px
  font-family "lucida grande", "lucida sans unicode", lucida, "Helvetica Neue", Helvetica, Arial, sans-serif;
  p
    margin 0 0 0.5rem
  p, ul, ol
    line-height normal
  a
    font-weight normal
  .theme-default-content:not(.custom) > h2
    margin-bottom 0.5rem
  .theme-default-content:not(.custom) > h2:first-child + p
    margin-top 0.5rem
  .theme-default-content:not(.custom) > h3
    padding-top 4rem

  /* Override */
  .md-card
    margin-top 0.5em
    .card-image
      padding 0.2rem
      img
        max-width 120px
        max-height 120px
    .card-content p
      -webkit-margin-after 0.2em

@media (max-width: 419px)
  .theme-container.home-page .page
    p, ul, ol
      line-height 1.5

    .md-card
      .card-image
        img 
          width 100%
          max-width 400px

</style>
