
# Using VS Code Devcontainer's

[VS Code Devcontainer's][vs_code_remove_containers_url] uses the extension [Visual Studo Code Remote - Containers][vs_code_remote_containers_ext_url] to allow you to use [Docker][docker_url]] as a fully featured development environment.

This also aids in providing isolated development environments with the power of Docker that can work with your local files sustlem using mounts

## Prerequisite's

You will require the following installed on your local machine in order to do use devcontainers approach:

- [Docker][docker_url]
- [VS Code][vs_code_url]
- [VS Code Extension - Remote - Containers][vs_code_remote_containers_ext_url]

There is a guide to getting started with remote containers can be found [here][vs_code_remote_containers_url]

## Git

As this container is isolated the repository it's required to set-up git locally

```/bin/bash
git config --local user.name "[Git Username]"
git config --local user.email [Account email address]
```

Run the above commands to set the config locally so then this can be used in the container

## SSH

if you are using SSH for pushing and pulling your commits this will normally be created in teh `~/.ssh` folder in your local file system. The devcontainer will mount them from directory. If they are in a different directory please move them for the time being to the default location.

Once inside the container you will be able to use ssh as normal

```/bin/bash
ssh-add ~k ~/.ssh/path/to/key/id_rsa
ssh-add -l // Will list loaded identities
```

## GPG

Depending on your host machine you using GPG can be come an issue, this is due to version of GPG you may have locally. In order to simplify this export your keys into the repoistory as `*.asc` files (both the public and private key)

For Linux and Mac Users you shoudl be able to run the following

```/bin/bash
$ gpg --list-secret-keys --keyid-format long // or --list-keys to see public keys
/home/someone/.gunpg/secring.gpg
----------------------------------
sec   4096R/DE0B444EAABEE123 2022-04-20 [expires: 2033-04-20]
      Key fingerprint = 2F15 753B 20B1 48CA 31CE  96C2 E4F2 4231 DA0B 654E
uid                  Full Name <username@domain.com>
ssb   4096R/EC5AAA09BBSDSFFS 2022-04-20
```

If you have no keys and require some please see [this][github_generate_gpg_url] article on how to create some

Use the below commands once you know your $key_id, For example he key id for the above key is `DE0B444EAABEE123`.

```/bin/bash
gpg --export -a $key_id > public.asc
gpg --export-secret-key -a $key_id > private.asc
```

[Here][export_import_gpg_keys_windwos_url] is some guidance for Windows users where required

Now that you have the files when you load the devcontainer you should be able to import them.

You may just need to check that the GPG Agent is running so run this command to start

```/bin/bash
$ gpg-connect-agent reloadagent /bye
OK // If everything is ok
$ export GPG_TTY=$(tty)
```

May have the `gpg-connect` command twice if a little delays is there.

Then run these commands, you should get a prompt when importing the secret key, if there is any issues, please check the `pin-entry` application to ensure its configuration is correct

```/bin/bash
gpg --import public.asc
gpg --import private.asc
```

Ensure then they are configured with git using the following

#### Configuring GPG Key for signing commits

Providing you have configured git locally in the repo and have set / created a GPG key, then you can run the folloing script (providing the the email address use match). This will set the set the key

```/bin/bash
./scripts/gpg_setup.sh
```

## Making Changes to the conatainer

There may be times when you want to add other languages and binares to the container, these are all controlled by 2 files `docker/local.dev.dockerfile` and `.devcontainer/devcontainer.json` read more on [remote containers][vs_code_remove_containers

---

## Contributing

Please take a look at our [contribution][contributing_link] guidelines.


<!-- references & links  -->
[go_site_url]: https://go.dev/
[open_api_spec_url]: https://spec.openapis.org/oas/latest.html#version-3-1-0
[oapi_codegen_url]: https://github.com/deepmap/oapi-codegen
[docker_url]: https://www.docker.com/get-started
[vs_code_url]: https://code.visualstudio.com/download
[vs_code_remote_containers_ext_url]: https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers
[vs_code_remote_containers_url]: https://code.visualstudio.com/docs/remote/containers
[export_import_gpg_keys_windwos_url]: https://blog.jmorbegoso.com/post/export-and-import-gpg-keys-in-windows-and-wsl
[github_generate_gpg_url]: https://docs.github.com/en/authentication/managing-commit-signature-verification/generating-a-new-gpg-key
[contributing_link]: ./CONTRIBUTING.md
