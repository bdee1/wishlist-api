# API Documentation

## Authentication Routes

### POST /api/auth/login
- **Description**: Log in a user.
- **Request Body**:
  - `email` (string): User's email.
  - `password` (string): User's password.
- **Response**:
  - `accessToken` (string): JWT access token.
  - `refreshToken` (string): JWT refresh token.

### POST /api/auth/register
- **Description**: Register a new user.
- **Request Body**:
  - `email` (string): User's email.
  - `password` (string): User's password.
- **Response**:
  - `user` (object): The registered user.

### POST /api/auth/refresh
- **Description**: Refresh the access token.
- **Request Body**:
  - `refreshToken` (string): JWT refresh token.
- **Response**:
  - `accessToken` (string): New JWT access token.

## List Routes

### GET /api/lists/:userId
- **Description**: Get all lists for a user.
- **Parameters**:
  - `userId` (string): User ID.
- **Response**:
  - `lists` (array): Array of lists.

### POST /api/lists
- **Description**: Create a new list.
- **Request Body**:
  - `ownerId` (string): Owner ID.
  - `title` (string): List title.
  - `description` (string): List description.
  - `holiday` (string): Holiday associated with the list.
- **Response**:
  - `list` (object): The created list.

### DELETE /api/lists/:id
- **Description**: Delete a list.
- **Parameters**:
  - `id` (string): List ID.
- **Response**:
  - `message` (string): Success message.

## List Item Routes

### POST /api/lists/:listId/items
- **Description**: Create a new list item.
- **Parameters**:
  - `listId` (string): List ID.
- **Request Body**:
  - `sortOrder` (number): Sort order of the item.
  - `title` (string): Item title.
  - `description` (string): Item description.
  - `link` (string): Item link.
  - `price` (number): Item price.
  - `size` (string): Item size.
  - `color` (string): Item color.
  - `notes` (string): Item notes.
  - `parentNotes` (string): Parent notes.
  - `status` (string): Item status (ordered, shipped, received).
- **Response**:
  - `item` (object): The created list item.

### GET /api/lists/:listId/items
- **Description**: Get all items for a list.
- **Parameters**:
  - `listId` (string): List ID.
- **Response**:
  - `items` (array): Array of list items.

### PUT /api/lists/:listId/items/:itemId
- **Description**: Update a list item.
- **Parameters**:
  - `listId` (string): List ID.
  - `itemId` (string): Item ID.
- **Request Body**:
  - `title` (string): Item title.
  - `description` (string): Item description.
  - `link` (string): Item link.
  - `price` (number): Item price.
  - `size` (string): Item size.
  - `color` (string): Item color.
  - `notes` (string): Item notes.
  - `parentNotes` (string): Parent notes.
  - `status` (string): Item status (ordered, shipped, received).
- **Response**:
  - `item` (object): The updated list item.

### DELETE /api/lists/:listId/items/:itemId
- **Description**: Delete a list item.
- **Parameters**:
  - `listId` (string): List ID.
  - `itemId` (string): Item ID.
- **Response**:
  - `message` (string): Success message.

## List Share Routes

### POST /api/lists/:listId/share
- **Description**: Share a list with a user.
- **Parameters**:
  - `listId` (string): List ID.
- **Request Body**:
  - `userId` (string): User ID.
  - `access` (string): Access level (owner, parent, read).
- **Response**:
  - `share` (object): The created list share.

### GET /api/lists/:listId/share
- **Description**: Get all users shared with a list.
- **Parameters**:
  - `listId` (string): List ID.
- **Response**:
  - `shares` (array): Array of list shares.
  - 

**Environment Variables**
You will need to create a .env file in the root of the api folder.  this file shoudl contain values for the following Variables:
- MONGO_URI: this is the URI for connecting to your mongoDB database
- PORT: this is the port that the server will run on
- JWT_SECRET: this is a secret value that you will use to generate your JWT Tokens
