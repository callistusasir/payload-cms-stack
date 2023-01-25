# Branching-Strategy

- A good branching strategy can help the development team to move fast and achieve parallel development allowing developers to work on tasks simultaneously.
- Parallel builds and testing ensure developers get the feedback quickly.
- CI-CD can be achieved.

**Our branching strategy will cover,**

- Optimize productivity.
- Enable parallel development.
- Allow for a set of planned, structured releases.
- Provide a clear path for software changes through production.
- Evolve to accommodate changes that are delivered.
- Support multiple versions of software release and hotfix.

## List of Branches and their uses:

**Main:** - `/main`
- The Main branch stores the official release.
- Tag all commits in the master branch with a version number.
- Production build can happen only from the Main branch.
- This branch will be restricted and accepts only merge requests.

**Feature:** - `/feature/**`
- Feature branches are generally created off to the latest main branch.
- Feature branches use main as their parent branch.
- When you’re done with the development work on the feature, the next step is to merge the feature branch into msin and it will be deleted.
- Feature branches should be created in the format `feature/[JIRA-Ticket-Number]-[Small Description]` e.g `git checkout -b feature/BDA-1153-add-loging` or `git checkout -b feature/BDA-1153`.

**BugFix:** - `/bugfix/**`
- During stage testing If any bugs are found, the BugFix branch will be created from the main branch.
- After fixing and testing. Bugfix branch will be merged to release branch and **back merged to main branch** and it will be deleted.
- Creating a bugfix branch is not encouraged.
- Bugfix branches should be created in the format `bigfix/[JIRA-Ticket-Number]-[Small Description]` e.g `git checkout -b bugfix/BDA-115-color-correction` or `git checkout -b bugfix/BDA-115`.

**HotFix:** - `/hotfix/**`
- The hotfix branches are used to quickly patch production releases.
- This is the only branch that should **directly cut off from the main**.
- After the fix is complete, it should be **merged into main** and the main should be tagged with an updated version number.
- Hotfix branches should be created in the format `hotfix/[JIRA-Ticket-Number]-[Small Description]` e.g `git checkout -b hotfix/BDA-115-color-correction` or `git checkout -b hotfix/BDA-115`.

## Best Practices 
- All the branches need to be restricted except feature branch.
- Code can be merged only using Merge Request (MR).
- All code will be reviewed before merging.
- Always maintain only Main, and current sprint branches.
- All new code should have a unit test alongside it unless spceifically doesn't require this.
