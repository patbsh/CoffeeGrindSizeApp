## About the project

The app's premise is to help any coffee lover find the correct grind setting for a specific grinder. The internet is loaded with recipes that use exact grind settings for a specific grinder.

This app helps the user "translate" grind settings between grinders, it can also show the user the approximate grind setting for any general grind sizes like: 'fine', 'medium, or 'coarse'.

Current features of the app:

- Translate grind settings between grinders
- Show approximate grind settings for the selected grinder (very fine, fine, medium, medium coarse, coarse, very coarse)
- A form to submit a new grinder and producer
- A form to request changes to an existing grinder
- List of all existing grinders and producers (with detail pages)


## Admin role

Instead of creating a separate panel for the admin role, the app currently enables "power options" when the signed-in user has the "admin" role. Admin sees whether a grinder or a producer is verified from the table view. The reports tab also becomes available.

A user with the admin privileges can currently:

- Edit, delete and verify grinders and producers
- View and delete the reports

In the future, an admin will have more options available, like managing users. But with the current state of development, such functionality is unneccessary (normal users do not have any significant features).


## About the technology stack

The project is being developed using Laravel (v9) + Vue3. 

It uses bootstrap (v5) and vuetify (v3) as primary frontend frameworks.

