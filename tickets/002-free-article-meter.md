---
title: Registration wall - Free article meter
status: todo
created: 2026-09-29
---

# Registration wall - Free article meter

## Story

As an anonymous reader,
I want to see how many free articles I have left,
so that I know when I'll need to register to keep reading.

## Acceptance criteria

### AC 1: Meter on the first free article

**Given** a visitor who is not logged in\
**And** they have not read any articles\
**When** they open an article\
**Then** the meter below the hero image reads "2/3 free articles, register or login for unlimited views"

### AC 2: Meter on the second free article

**Given** a visitor who is not logged in\
**And** they have read one article\
**When** they open a different article\
**Then** the meter reads "1/3 free articles, register or login for unlimited views"

### AC 3: Meter on the third free article

**Given** a visitor who is not logged in\
**And** they have read two different articles\
**When** they open a third different article\
**Then** the meter reads "0/3 free articles, register or login for unlimited views"

### AC 4: Full article is shown with the meter

**Given** a visitor who is not logged in\
**And** they have free articles left\
**When** they open an article\
**Then** the full article body is shown

### AC 5: Reopening an article does not use another free article

**Given** a visitor who is not logged in\
**And** they have read one article\
**When** they open the same article again\
**Then** the meter still reads "2/3 free articles, register or login for unlimited views"

### AC 6: Free articles used are remembered between visits

**Given** a visitor who is not logged in\
**And** they have read two different articles\
**When** they close the site and come back later\
**And** they open a new article\
**Then** the meter reads "0/3 free articles, register or login for unlimited views"

### AC 7: Articles read while logged in do not count

**Given** a visitor who has not read any articles\
**And** they log in and read an article\
**And** they log out\
**When** they open a different article\
**Then** the meter reads "2/3 free articles, register or login for unlimited views"

### AC 8: Logged-in visitor does not see the meter

**Given** a visitor who is logged in\
**When** they open an article\
**Then** the meter is not shown

### AC 9: Homepage does not show the meter

**Given** a visitor who is not logged in\
**When** they open the homepage\
**Then** the meter is not shown

## Steps to test

1. Clear cookies and site data for CryptoWire, or open a new private window
2. Open an article and check the meter reads 2/3
3. Open a second, different article and check the meter reads 1/3
4. Open a third, different article and check the meter reads 0/3
5. Repeat step 1 to start again

## Source assets

- **Spec:** CryptoWire practical exercise, part 2 (wireframe A)
