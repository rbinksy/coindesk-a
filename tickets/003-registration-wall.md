---
title: Registration wall - Wall after three free articles
status: todo
created: 2026-09-29
---

# Registration wall - Wall after three free articles

## Story

As an anonymous reader who has used my three free articles,
I want to be told clearly how to keep reading,
so that I can register or log in and read the full article.

## Acceptance criteria

### AC 1: Fourth article shows the registration wall

**Given** a visitor who is not logged in\
**And** they have read three different articles\
**When** they open a fourth, different article\
**Then** a banner reads "Register or login to read unlimited articles"

### AC 2: Article body is hidden behind the wall

**Given** the registration wall is shown to an anonymous visitor\
**When** they look below the banner\
**Then** the article body is not shown

### AC 3: Headline, category and date are still shown

**Given** the registration wall is shown to an anonymous visitor\
**When** they view the article\
**Then** the headline, category and date are shown

### AC 4: Hero image is still shown

**Given** the registration wall is shown to an anonymous visitor\
**When** they view the article\
**Then** the hero image is shown

### AC 5: Free article meter is not shown with the wall

**Given** the registration wall is shown to an anonymous visitor\
**When** they view the article\
**Then** the free article meter is not shown

### AC 6: Articles already read stay readable

**Given** a visitor who is not logged in\
**And** they have read three different articles\
**When** they open one of those three articles again\
**Then** the full article body is shown

### AC 7: Logging in from the wall shows the full article

**Given** the registration wall is shown to an anonymous visitor\
**When** they click Login\
**Then** the full article body is shown

### AC 8: Registering from the wall shows the full article

**Given** the registration wall is shown to an anonymous visitor\
**When** they click Register\
**Then** the full article body is shown

### AC 9: Logged-in visitor never sees the wall

**Given** a visitor who read three different articles before logging in\
**And** they are now logged in\
**When** they open a new article\
**Then** the registration wall is not shown

### AC 10: Logging out brings the wall back

**Given** a visitor who read three different articles before logging in\
**And** they have since logged out\
**When** they open a new article\
**Then** the registration wall is shown

### AC 11: Visitor with free articles left does not see the wall

**Given** a visitor who is not logged in (and has read fewer than three different articles)\
**When** they open a new article\
**Then** the registration wall is not shown

## Steps to test

1. Clear cookies and site data for CryptoWire, or open a new private window
2. Open three different articles
3. Open a fourth, different article and check the wall is shown
4. Repeat step 1 to start again

## Source assets

- **Spec:** CryptoWire practical exercise, part 2 (wireframe B)
