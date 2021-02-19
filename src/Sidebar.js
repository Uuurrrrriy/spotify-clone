import React from "react";
import "./Sidebar.css";
import { SidebarOption } from "./SidebarOption";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";
import { useStateValue } from "./StateProvider";

export const Sidebar = () => {
  const [{ playlists }, dispatch] = useStateValue();
  return (
    <div className="sidebar">
      <img
        className="sidebar__logo"
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt="logo"
      />
      <SidebarOption Icon={HomeIcon} title="Home" />
      <SidebarOption Icon={SearchIcon} title="Search" />
      <SidebarOption Icon={LibraryMusicIcon} title="Your Library" />
      <br />
      <strong className="sidebar__title"> PLAYLISTS </strong>
      <hr />
      {playlists?.items?.map((playlist) => {
        if (
          playlist.name ===
          "GYM SONGS 2021 🏋🏽‍♀️ WORKOUT MUSIC 💪🏽 FITNESS - TRAINING - RUNNING CALISTHENICS BASS BOOSTED 🦾"
        ) {
          return <div />;
        }
        return <SidebarOption title={playlist.name} />;
      })}
    </div>
  );
};
