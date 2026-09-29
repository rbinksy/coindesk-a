---
title: Registration wall - One-click register, login and logout
status: todo
created: 2026-09-29
---

# Registration wall - One-click register, login and logout

## Story

As a CryptoWire reader,
I want to register or log in with one click,
so that I can read unlimited articles without filling in a form.

## Acceptance criteria

### AC 1: Anonymous visitor sees Register and Login

**Given** a visitor who is not logged in\
**When** they open any page on the site\
**Then** the header shows Register and Login

### AC 2: Anonymous visitor does not see Logout

**Given** a visitor who is not logged in\
**When** they open any page on the site\
**Then** the header does not show Logout

### AC 3: Register logs the visitor in with one click

**Given** a visitor who is not logged in\
**When** they click Register\
**Then** they are logged in without being asked for any details

### AC 4: Login logs the visitor in with one click

**Given** a visitor who is not logged in\
**When** they click Login\
**Then** they are logged in without being asked for any details

### AC 5: Logging in keeps the visitor on the same page

**Given** a visitor who is not logged in\
**And** they are on an article page\
**When** they register or log in\
**Then** they stay on that article page

### AC 6: Logged-in visitor sees Logout

**Given** a visitor who is logged in\
**When** they open any page on the site\
**Then** the header shows Logout

### AC 7: Logged-in visitor does not see Register or Login

**Given** a visitor who is logged in\
**When** they open any page on the site\
**Then** the header does not show Register or Login

### AC 8: Logout returns the visitor to anonymous

**Given** a visitor who is logged in\
**When** they click Logout\
**Then** the header shows Register and Login again

### AC 9: Logged-in state is kept between pages

**Given** a visitor who is logged in\
**When** they move to another page\
**Then** they are still logged in

### AC 10: Logged-in state is kept after a reload

**Given** a visitor who is logged in\
**When** they reload the page\
**Then** they are still logged in

## Source assets

- **Spec:** CryptoWire practical exercise, part 2 (wireframes A and C)
