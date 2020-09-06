import React, { useState } from "react";

import MenuItem from "../menu-items/menuItem.component";

import "./directory.styles.scss";

const Directory = () => {
  const [sections] = useState([
    {
      id: 1,
      title: "Jerseys",
      imageUrl:
        "https://images.immediate.co.uk/production/volatile/sites/3/2020/08/Premier-League-kits-2020-21-3c00566.jpg?quality=90&resize=620,413",
    },
    {
      id: 2,
      title: "Boots",
      imageUrl:
        "https://cdn.stocksnap.io/img-thumbs/960w/soccer-cleats_AO8SMKGOI4.jpg",
    },
    {
      id: 3,
      title: "Accesories",
      imageUrl:
        "https://www.theoneglove.com/images/slyr-pure-goalkeeper-gloves-p217-1587_image.jpg",
    },
    {
      id: 4,
      title: "Footballs",
      imageUrl:
        "https://images.pexels.com/photos/39362/the-ball-stadion-football-the-pitch-39362.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      size: "large",
    },
    {
      id: 5,
      title: "Others",
      imageUrl:
        "https://cdn.stocksnap.io/img-thumbs/960w/soccer-net_1IIEPDOFFI.jpg",
      size: "large",
    },
  ]);

  return (
    <div className="directory-menu">
      {sections.map(({ id, ...otherSectionsProps }) => {
        return <MenuItem key={id} {...otherSectionsProps} />;
      })}
    </div>
  );
};

export default Directory;
