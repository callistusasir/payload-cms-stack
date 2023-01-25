#!/bin/bash -e 

BASEDIR="$(dirname -- "${BASH_SOURCE[0]}")";
USER_EMAIL="$(git config --local user.email)"

# Removed node modules so that a clean install can be done
remove_node_modules() {
    printf "%s\n" "Removing node_module folders for a clean install"
    rm -rf "$BASEDIR/../node_modules" "$BASEDIR/../**/node_modules"
}

# Command to return to the executing directory
reset_dir() {
    cd "../$BASEDIR"
}

# Installs the packages using npm
install_node_packages() {
    cd "$BASEDIR/.."
    printf "%s\n" "Installing packages for all workspaces"
    npm ci
}

restart_gpg() {
    gpg-connect-agent reloadagent /bye
}

remove_node_modules
install_node_packages
restart_gpg
