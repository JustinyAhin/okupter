---
layout: "../../../layouts/SinglePost.astro"
title: Second post title
abstract: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod,
  nisl eget consectetur congue, nisl nunc aliquet nunc, euismod aliquam nisl nunc
  euismod nisl.
datePublished: 2022-05-31T22:00:00Z

---
## This is the first post

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tristique dolor sit amet fringilla laoreet. Maecenas ornare porttitor justo eget rutrum. Integer id sagittis nibh, eget tincidunt arcu. Phasellus sed nulla quis nunc hendrerit suscipit.

Maecenas sit amet maximus sapien. Fusce vitae pellentesque tortor. Nulla mi odio, sollicitudin eget nibh nec, hendrerit mollis diam. Pellentesque efficitur enim ut tristique convallis.

> Duis in odio volutpat mauris luctus lobortis. Maecenas porta, nisi at consequat porta, sapien leo molestie sapien, a luctus tellus mauris ac metus.

    // Convert date to readble format
    const readableDate = (date) => {
      const options = { year: "numeric", month: "long", day: "numeric" };
      return new Date(date).toLocaleDateString(undefined, options);
    };
    

## Etiam tincidunt venenatis erat

Etiam tincidunt venenatis erat, in convallis lectus cursus eu. Donec scelerisque augue justo, ut finibus enim pulvinar in. Ut bibendum, diam id gravida sagittis, arcu tortor euismod neque, non lacinia ante nunc id nulla.

### Ut eu tristique augue

Ut eu tristique augue, id ultrices enim. Proin pharetra orci eu dui rutrum dapibus sed ac lorem. Ut interdum, arcu sit amet egestas dignissim, metus felis ultricies urna, eget pulvinar augue nulla non nisi. Pellentesque ultricies viverra pulvinar. 

Fusce at laoreet est. Cras dapibus sem mi, quis finibus mauris pellentesque non. Quisque pharetra felis nec nunc efficitur venenatis.