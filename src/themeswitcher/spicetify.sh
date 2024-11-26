if [ "$spicetify" = "false" ]; then
	echo "skipping spicetify"
	return 1;
fi

## Edit Spicetify theme
sed -i "/^main[[:space:]]*=/s/=.*/= ${background:1}/" ~/.config/spicetify/Themes/Sleek/color.ini
sed -i "/^sidebar[[:space:]]*=/s/=.*/= ${background:1}/" ~/.config/spicetify/Themes/Sleek/color.ini
sed -i "/^nav-active-text[[:space:]]*=/s/=.*/= ${background:1}/" ~/.config/spicetify/Themes/Sleek/color.ini
sed -i "/^main-secondary[[:space:]]*=/s/=.*/= ${background:1}/" ~/.config/spicetify/Themes/Sleek/color.ini
sed -i "/^player[[:space:]]*=/s/=.*/= ${background:1}/" ~/.config/spicetify/Themes/Sleek/color.ini
sed -i "/^subtext[[:space:]]*=/s/=.*/= ${foreground:1}/" ~/.config/spicetify/Themes/Sleek/color.ini
sed -i "/^playback-bar[[:space:]]*=/s/=.*/= ${hl2}/" ~/.config/spicetify/Themes/Sleek/color.ini
sed -i "/^play-button[[:space:]]*=/s/=.*/= ${hl2}/" ~/.config/spicetify/Themes/Sleek/color.ini
sed -i "/^nav-active-text[[:space:]]*=/s/=.*/= ${background:1}/" ~/.config/spicetify/Themes/Sleek/color.ini
sed -i "/^text[[:space:]]*=/s/=.*/= ${hl}/" ~/.config/spicetify/Themes/Sleek/color.ini
sed -i "/^button[[:space:]]*=/s/=.*/= ${hl2}/" ~/.config/spicetify/Themes/Sleek/color.ini
sed -i "/^button-secondary[[:space:]]*=/s/=.*/= ${hl}/" ~/.config/spicetify/Themes/Sleek/color.ini
sed -i "/^button-active[[:space:]]*=/s/=.*/= ${hl2}/" ~/.config/spicetify/Themes/Sleek/color.ini
sed -i "/^card[[:space:]]*=/s/=.*/= ${background:1}/" ~/.config/spicetify/Themes/Sleek/color.ini
sed -i "/^shadow[[:space:]]*=/s/=.*/= ${background:1}/" ~/.config/spicetify/Themes/Sleek/color.ini
sed -i "/^nav-active[[:space:]]*=/s/=.*/= ${color5:1}/" ~/.config/spicetify/Themes/Sleek/color.ini
sed -i "/^tab-active[[:space:]]*=/s/=.*/= ${background:1}/" ~/.config/spicetify/Themes/Sleek/color.ini
sed -i "/^notfication[[:space:]]*=/s/=.*/= ${hl}/" ~/.config/spicetify/Themes/Sleek/color.ini
sed -i "/^misc[[:space:]]*=/s/=.*/= ${color6:1}/" ~/.config/spicetify/Themes/Sleek/color.ini