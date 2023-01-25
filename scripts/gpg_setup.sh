#!/bin/bash

USER_EMAIL="$(git config --local user.email)"

# Add GNU PGP public key to key store
setup_gpg() {
    # Works in AWS Workspaces
    GPG_PUB_ID=$(gpg --list-secret-keys --keyid-format=long -a ${USER_EMAIL} | grep '^sec' | head -n 1 | cut -d'/' -f2 | cut -d' ' -f1)
    if [ -n "$GPG_PUB_ID" ]; then
        printf "Using GPG key: %s\n" "$GPG_PUB_ID"
        git config --local user.signingkey "$GPG_PUB_ID"
    fi
    git config --local commit.gpgsign true
    git config --local fetch.prune true

    # Prevent trying to run pinentry within the VSCode container
    # This is only changing the container-local ~/.bashrc
    printf "\nexport GPG_TTY=%s\n" "\$(tty)" >> ~/.bashrc
}

setup_gpg