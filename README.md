# Themeswitcher

## Requirements:
1. pywal
2. python
3. magick 

## Setup:
1. Run install.sh
2. (Firefox) install pywalfox extention
3. (VScode) Install pywal theme
4. (Spotify) Install spicetify and Sleek theme


## Here is how i did it:

Hyprland - Use sed to edit the config. This should apply live as Hyprland uses a Filewatcher.

Spicetify - Start Spotify using "spicetify watch" (here: launchtify.sh) to enable the filewatcher for colors.ini. This way you can also jsut use sed.

GTK Themes - Generate custom variations of the oomox color theme using the script provided by its creators 

Firefox - Use the pywal plugin

VScode - Use the pywal plugin


Here is how the the live updates look: [Reddit](https://www.reddit.com/r/unixporn/comments/1chv3tr/hyprland_everything_pywal/)
