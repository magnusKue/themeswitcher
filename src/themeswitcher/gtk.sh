if [ "$gtk" = "false" ]; then
	echo "skipping gtk theme generation"
	return 1;
fi

## Generate GTK-Theme if not cached yet
if [ ! -d "$HOME/.themes/${filetitle}" ] || [ "$2" = "-R" ]; then
	$oomox_change_color -o "$filetitle" <(echo -e "BG=${background:1}\nBTN_BG=${background:1}\nBTN_FG=${foreground:1}\nFG=${foreground:1}\nGRADIENT=0.0\nHDR_BTN_BG=${hl2}\nHDR_BTN_FG=${foreground:1}\nHDR_BG=${hl2}\nHDR_FG=${foreground:1}\nROUNDNESS=4\nSEL_BG=${hl}\nSEL_FG=${foreground:1}\nSPACING=3\nTXT_BG=${background:1}\nTXT_FG=${foreground:1}\nWM_BORDER_FOCUS=${hl2}\nWM_BORDER_UNFOCUS=${foreground:1}\n")
	generated="true"
else
	echo -e "\n gtk-theme found at $HOME/.themes/${filetitle} => skipping regeneration"
	generated="false"
fi

## Apply GTK-Theme

# GTK-3.0
sed -i "s/^gtk-theme-name=.*/gtk-theme-name=${filetitle}/" "$HOME/.config/gtk-3.0/settings.ini"
$HOME/code/themeswitcher/src/gtk-themeswitcher.sh -M

# GTK-2.0
sed -i "s/^gtk-theme-name=.*/gtk-theme-name=\"${filetitle}\"/" "$HOME/.gtkrc-2.0"
