# 🎓 Snake Game 2D - Educational Learning Plan
## Progressive Curriculum for Code Quality & Software Engineering Fundamentals

> **Teacher's Philosophy**: This plan follows the principle of "Learn by Doing" - each module teaches a concept and immediately applies it to improve our codebase. You'll see real results while building fundamental skills.

---

## 📚 Course Overview

**Duration**: 8-12 weeks (2-3 modules per week)
**Skill Level**: Intermediate TypeScript/JavaScript
**Learning Approach**: Theory → Practice → Refactor → Review

---

## 🎯 Learning Objectives

By completing this curriculum, you will master:

1. **Clean Code Principles** - Writing maintainable, readable code
2. **SOLID Principles** - Object-oriented design fundamentals
3. **Design Patterns** - Proven solutions to common problems
4. **Dependency Management** - Reducing coupling, increasing testability
5. **Type Safety** - Advanced TypeScript techniques
6. **Testing** - Unit, integration, and end-to-end testing
7. **Documentation** - Professional code documentation
8. **Performance** - Optimization and profiling
9. **Architecture** - Scalable game architecture patterns

---

## 📖 Module Structure

Each module follows this format:

```
📚 Theory (15-30 min reading)
  ↓
🔍 Code Analysis (Identify issues in our codebase)
  ↓
💡 Solution Design (Plan improvements)
  ↓
⚒️ Implementation (Hands-on coding)
  ↓
✅ Validation (Testing & review)
  ↓
📝 Reflection (What did we learn?)
```

---

## 🗺️ Curriculum Roadmap

### **Phase 1: Foundations** (Weeks 1-3)
Clean code basics and eliminating code smells

### **Phase 2: Architecture** (Weeks 4-6)
Design patterns and dependency management

### **Phase 3: Quality Assurance** (Weeks 7-9)
Testing, documentation, and type safety

### **Phase 4: Advanced Topics** (Weeks 10-12)
Performance, scalability, and advanced patterns

---

# Phase 1: Foundations (Weeks 1-3)

## Module 1: Code Organization & Magic Numbers

### 📚 Theory: The Magic Number Anti-Pattern

**What are Magic Numbers?**
Numbers or strings that appear directly in code without explanation.

```typescript
// ❌ BAD: What does 32 mean?
if (x % 32 === 0) {
  // ...
}

// ✅ GOOD: Clear intent
const GRID_SIZE = 32;
if (x % GRID_SIZE === 0) {
  // ...
}
```

**Why are they bad?**
- Hard to understand intent
- Difficult to change consistently
- No single source of truth
- Makes testing harder

**The Solution: Named Constants**
- Create a centralized constants file
- Use UPPER_SNAKE_CASE for constants
- Group related constants
- Add documentation

### 🔍 Code Analysis

**Current Issues in Our Codebase:**

1. **player.ts:28** - `const gridSize = 32;`
2. **player.ts:29** - `const moveInterval = 200;`
3. **gameboard.ts:73** - `this.cameraOffset += 1.5;`
4. **collisionmanager.ts:103** - `cooldownTime: 1000`
5. **scoreManager.ts:59** - Scoring increments every `500ms`
6. **countdown.ts:19** - `startTime: 3000` (3 seconds)
7. **levelfactory.ts** - Hundreds of array indices with entity mappings

### 💡 Solution Design

**Create `src/constants.ts`:**

```typescript
// Game Grid
export const GRID_SIZE = 32;

// Timing
export const PLAYER_MOVE_INTERVAL = 200; // ms
export const SCORE_INCREMENT_INTERVAL = 500; // ms
export const COLLISION_COOLDOWN = 1000; // ms
export const COUNTDOWN_START_TIME = 3000; // ms

// Game Physics
export const CAMERA_SCROLL_SPEED = 1.5; // pixels per frame

// Player Configuration
export const INITIAL_LIVES = 3;
export const MAX_LIVES = 10;
export const INITIAL_TRAIL_LENGTH = 8;

// Power-ups
export const STAR_MULTIPLIER = 2;
export const STAR_DURATION = 10000; // ms

// Entity Type Mappings
export enum EntityType {
  EMPTY = 0,
  BLOCK = 1,
  STAR = 2,
  HEART = 3,
  PLANT = 4,
  GHOST = 5,
  TETRIS_BLOCK = 6,
  WIN_BLOCK = 7
}
```

### ⚒️ Implementation Tasks

**Task 1.1**: Create constants.ts file
**Task 1.2**: Replace magic numbers in player.ts
**Task 1.3**: Replace magic numbers in gameboard.ts
**Task 1.4**: Replace magic numbers in collision manager
**Task 1.5**: Replace magic numbers in score manager
**Task 1.6**: Replace entity type numbers with enum
**Task 1.7**: Update all files to import constants

**Estimated Time**: 2-3 hours

### ✅ Validation

- [ ] All magic numbers replaced with named constants
- [ ] Code compiles without errors
- [ ] Game plays identically to before
- [ ] Constants file is well-documented
- [ ] No duplicate constant definitions

### 📝 Reflection Questions

1. How does using constants make the code easier to understand?
2. What would happen if we needed to change GRID_SIZE from 32 to 64?
3. Where else in the codebase might benefit from constants?

---

## Module 2: Code Comments & Documentation Standards

### 📚 Theory: Documentation Best Practices

**The Documentation Pyramid:**

```
                  /\
                 /  \    API Docs (JSDoc)
                /    \
               /      \  Inline Comments
              /________\ Self-Documenting Code
```

**Levels of Documentation:**

1. **Self-Documenting Code** (foundation)
   - Clear variable names
   - Descriptive function names
   - Obvious logic

2. **Inline Comments** (clarification)
   - Explain "why", not "what"
   - Document non-obvious decisions
   - Warn about edge cases

3. **JSDoc/API Documentation** (interface)
   - Document public APIs
   - Explain parameters and return values
   - Provide usage examples

**Current Issue: Language Inconsistency**

Our codebase mixes Swedish and English:
```typescript
// Tidpunkt för senaste kollision (Swedish)
private lastCollisionTime: number = 0; // English code
```

**The Rule: Pick ONE language**
- For open-source/international: English
- For local teams: Team's primary language
- Never mix languages

### 🔍 Code Analysis

**Swedish Comments Found:**

1. **player.ts:51** - `// Tidpunkt för senaste kollision`
2. **player.ts:119** - `// Kontrollera om det är dags att flytta`
3. **collisionmanager.ts** - Multiple Swedish comments
4. **scoreManager.ts** - Mixed language comments

**Missing JSDoc:**

1. **Entity** class - "// TODO: JSDoc"
2. **Player** class - No parameter documentation
3. **CollisionManager** - Missing method docs
4. **ScoreManager** - Missing class documentation

### 💡 Solution Design

**Step 1: Language Standardization**
- Translate all Swedish comments to English
- Update README.md to English (or maintain both versions)

**Step 2: JSDoc Template**

```typescript
/**
 * Represents a movable entity in the game world.
 *
 * @abstract
 * @implements {IMovable}
 *
 * @example
 * class MyEntity extends Entity {
 *   draw() { // implementation }
 *   update() { // implementation }
 * }
 */
export abstract class Entity implements IMovable {
  /**
   * The current position of the entity in world space.
   * @type {p5.Vector}
   */
  public position: p5.Vector;

  // ...
}
```

### ⚒️ Implementation Tasks

**Task 2.1**: Translate all Swedish comments to English
**Task 2.2**: Add JSDoc to Entity class
**Task 2.3**: Add JSDoc to Player class
**Task 2.4**: Add JSDoc to GameScreen hierarchy
**Task 2.5**: Add JSDoc to Manager classes
**Task 2.6**: Document all public methods
**Task 2.7**: Create CONTRIBUTING.md with documentation standards

**Estimated Time**: 3-4 hours

### ✅ Validation

- [ ] No Swedish comments remain in code
- [ ] All public classes have JSDoc
- [ ] All public methods have JSDoc
- [ ] Parameters and return values documented
- [ ] Code examples provided for complex classes

### 📝 Reflection Questions

1. Why is language consistency important in software projects?
2. When should you write a comment vs. refactoring code to be clearer?
3. How does good documentation help future developers (including yourself)?

---

## Module 3: Single Responsibility Principle (SRP)

### 📚 Theory: The First SOLID Principle

**Definition:**
> "A class should have one, and only one, reason to change."
> — Robert C. Martin

**What does this mean?**

A class should do ONE thing and do it well.

**Example:**

```typescript
// ❌ BAD: Multiple responsibilities
class UserManager {
  saveUser(user: User) { /* database logic */ }
  sendEmail(user: User) { /* email logic */ }
  validateUser(user: User) { /* validation logic */ }
  generateReport(user: User) { /* reporting logic */ }
}

// ✅ GOOD: Single responsibilities
class UserRepository {
  save(user: User) { /* database only */ }
}

class EmailService {
  send(user: User) { /* email only */ }
}

class UserValidator {
  validate(user: User) { /* validation only */ }
}
```

**Benefits:**
- Easier to understand
- Easier to test
- Easier to change
- Less chance of breaking other features

### 🔍 Code Analysis

**SRP Violations in Our Codebase:**

1. **Player Class** (206 lines)
   - Drawing logic (visual representation)
   - Movement logic (game physics)
   - Input handling (keyboard controls)
   - Collision state (game state)
   - Lives management (game state)
   - Sound effects (audio)

   **Too many responsibilities!**

2. **CollisionManager** (284 lines)
   - Collision detection (geometry)
   - Collision response (game logic)
   - Sound management (audio)
   - Entity removal (lifecycle management)

   **Should be split!**

3. **GameBoard** (119 lines)
   - Screen management
   - Camera control
   - Entity management
   - Collision orchestration
   - Score management

   **Mixing concerns!**

### 💡 Solution Design

**Refactoring Plan:**

#### 1. Extract Audio Management

**Before:** Sound code scattered everywhere
**After:** Centralized `AudioManager` class

```typescript
export class AudioManager {
  private bgMusic: p5.SoundFile;
  private soundEffects: Map<string, p5.SoundFile>;

  play(soundName: string): void { }
  playMusic(musicName: string): void { }
  stopAll(): void { }
  setVolume(volume: number): void { }
}
```

**Benefits:**
- Single place to manage all audio
- Easy to add mute functionality
- Can implement audio pooling
- Testable without actual sound files

#### 2. Extract Player Input

**Before:** Input handling mixed with Player logic
**After:** Separate `InputController` class

```typescript
export class InputController {
  private keyBindings: KeyBindings;

  getDirection(): p5.Vector { }
  isKeyPressed(key: string): boolean { }
}

export class Player extends Entity {
  private inputController: InputController;

  update() {
    const direction = this.inputController.getDirection();
    this.move(direction);
  }
}
```

**Benefits:**
- Can easily switch input methods (keyboard, gamepad, AI)
- Easier to implement key rebinding
- Can record/replay inputs
- Testable separately

#### 3. Extract Rendering Logic

**Before:** Drawing code in entity classes
**After:** Separate `Renderer` or keep but simplify

```typescript
export class EntityRenderer {
  drawWithShadow(entity: Entity): void { }
  drawWithGlow(entity: Entity): void { }
  drawTrail(trail: p5.Vector[]): void { }
}
```

### ⚒️ Implementation Tasks

**Task 3.1**: Create AudioManager class
**Task 3.2**: Refactor all sound calls to use AudioManager
**Task 3.3**: Create InputController class
**Task 3.4**: Refactor Player to use InputController
**Task 3.5**: Extract collision response handlers
**Task 3.6**: Review each class for SRP compliance
**Task 3.7**: Update UML/architecture diagrams

**Estimated Time**: 5-6 hours

### ✅ Validation

- [ ] Each class has a clear, single purpose
- [ ] Class names clearly indicate their responsibility
- [ ] No class exceeds 150 lines (guideline)
- [ ] Tests pass after refactoring
- [ ] No duplicate functionality

### 📝 Reflection Questions

1. How do you decide if a class has too many responsibilities?
2. What are the trade-offs of splitting classes?
3. Can you identify other SRP violations in the codebase?

---

# Phase 2: Architecture (Weeks 4-6)

## Module 4: Dependency Injection & Inversion of Control

### 📚 Theory: Breaking Free from Global State

**The Problem with Global Variables:**

```typescript
// ❌ BAD: Global state
let game: Game;
let images: { [key: string]: p5.Image };

class Player {
  update() {
    image(images['player'], this.position.x, this.position.y);
  }
}
```

**Problems:**
- Tight coupling - Player can't exist without global `images`
- Hard to test - Must mock global state
- Hidden dependencies - Not clear what Player needs
- Race conditions - Initialization order matters
- Impossible to have multiple instances with different assets

**The Solution: Dependency Injection**

```typescript
// ✅ GOOD: Dependencies passed in
class Player {
  constructor(
    private assets: AssetManager,
    private audio: AudioManager
  ) {}

  update() {
    const img = this.assets.getImage('player');
    image(img, this.position.x, this.position.y);
  }
}

// Usage
const player = new Player(assetManager, audioManager);
```

**Benefits:**
- Explicit dependencies
- Easy to test (pass mocks)
- Flexible (swap implementations)
- No initialization order issues

**Types of Dependency Injection:**

1. **Constructor Injection** (recommended)
   ```typescript
   constructor(private dependency: Dependency) {}
   ```

2. **Property Injection**
   ```typescript
   public dependency: Dependency;
   player.dependency = dep;
   ```

3. **Method Injection**
   ```typescript
   update(dependency: Dependency) { }
   ```

### 🔍 Code Analysis

**Current Global Dependencies:**

```typescript
// main.ts
let game: Game;
let images: { [key: string]: p5.Image } = {} as any;
let sounds: { [key: string]: p5.SoundFile } = {} as any;
let customFont: p5.Font;
```

**Classes Depending on Globals:**

1. **Player** - Uses `sounds`, `images`, global p5 functions
2. **CollisionManager** - Uses `sounds`, global p5 functions
3. **All Entities** - Use `images`, global p5 functions
4. **ScoreManager** - Uses `customFont`
5. **GameBoard** - Uses global `game`

**Dependency Tree (current):**

```
Everything → Global State → p5.js Instance
```

**Goal: Dependency Tree (after refactoring):**

```
main.ts
  ├─ p5.js instance
  ├─ AssetManager (images, sounds, fonts)
  ├─ AudioManager (wraps sounds)
  ├─ Game (injected with managers)
  └─ Screens (injected with managers)
        └─ Entities (injected with managers)
```

### 💡 Solution Design

**Step 1: Create Manager Classes**

```typescript
/**
 * Manages all game assets (images, sounds, fonts).
 * Centralizes asset loading and retrieval.
 */
export class AssetManager {
  private images: Map<string, p5.Image> = new Map();
  private sounds: Map<string, p5.SoundFile> = new Map();
  private fonts: Map<string, p5.Font> = new Map();

  constructor(private p5Instance: p5) {}

  loadImage(key: string, path: string): void {
    this.images.set(key, this.p5Instance.loadImage(path));
  }

  getImage(key: string): p5.Image | undefined {
    return this.images.get(key);
  }

  // ... similar for sounds and fonts
}
```

**Step 2: Create Context Object**

```typescript
/**
 * Game context holding all shared dependencies.
 * Passed to entities and screens via constructor injection.
 */
export interface GameContext {
  p5: p5;
  assets: AssetManager;
  audio: AudioManager;
}
```

**Step 3: Refactor Entity Base Class**

```typescript
export abstract class Entity implements IMovable {
  constructor(
    protected ctx: GameContext,
    position: p5.Vector,
    size: p5.Vector
  ) {
    this.position = position;
    this.size = size;
  }

  // Now entities can access assets via this.ctx.assets
}
```

**Step 4: Update All Constructors**

Every class that needs dependencies gets them via constructor:

```typescript
// Before
const player = new Player(
  createVector(100, 100),
  createVector(32, 32),
  keyBindings,
  image
);

// After
const player = new Player(
  ctx,
  ctx.p5.createVector(100, 100),
  ctx.p5.createVector(32, 32),
  keyBindings,
  image
);
```

### ⚒️ Implementation Tasks

**Task 4.1**: Create AssetManager class
**Task 4.2**: Create GameContext interface
**Task 4.3**: Refactor Entity to accept GameContext
**Task 4.4**: Refactor all Entity subclasses
**Task 4.5**: Refactor GameScreen to accept GameContext
**Task 4.6**: Refactor all Screen subclasses
**Task 4.7**: Update main.ts to initialize context
**Task 4.8**: Remove all global variables
**Task 4.9**: Update tests to pass mock context

**Estimated Time**: 8-10 hours

### ✅ Validation

- [ ] No global variables (except p5 instance creation)
- [ ] All dependencies passed via constructor
- [ ] AssetManager tested independently
- [ ] Can create multiple game instances
- [ ] Code compiles and runs correctly

### 📝 Reflection Questions

1. Why is dependency injection called "Inversion of Control"?
2. How does DI make testing easier?
3. What are the trade-offs of passing dependencies vs. using globals?

---

## Module 5: Interface Segregation & Polymorphism

### 📚 Theory: Programming to Interfaces

**Interface Segregation Principle (ISP):**
> "No client should be forced to depend on methods it does not use."
> — Robert C. Martin

**The Problem:**

```typescript
// ❌ BAD: Fat interface
interface IGameEntity {
  draw(): void;
  update(): void;
  takeDamage(amount: number): void;  // Not all entities take damage
  heal(amount: number): void;         // Not all entities heal
  playSound(): void;                  // Not all entities make sounds
  attack(): void;                     // Not all entities attack
}

// A Star collectible must implement ALL methods
class Star implements IGameEntity {
  takeDamage() { /* unused */ }
  heal() { /* unused */ }
  attack() { /* unused */ }
  // ...
}
```

**The Solution: Small, Focused Interfaces**

```typescript
// ✅ GOOD: Segregated interfaces
interface IDrawable {
  draw(): void;
}

interface IUpdateable {
  update(): void;
}

interface IDamageable {
  takeDamage(amount: number): void;
  getCurrentHealth(): number;
}

interface IHealer {
  heal(amount: number): void;
}

// Classes implement only what they need
class Star implements IDrawable, IUpdateable {
  draw() { /* ... */ }
  update() { /* ... */ }
}

class Ghost implements IDrawable, IUpdateable, IDamageable {
  draw() { /* ... */ }
  update() { /* ... */ }
  takeDamage(amount: number) { /* ... */ }
  getCurrentHealth() { /* ... */ }
}
```

### 🔍 Code Analysis

**Current Interface:**

```typescript
interface IMovable {
  position: p5.Vector;
  size: p5.Vector;
  velocity: p5.Vector;
  direction: p5.Vector;
  // ...
  update(): void;
  draw(): void;
}
```

**Problems:**
- Not all entities are truly "movable" (e.g., Block, WinBlock are static)
- Mixes rendering (draw) with logic (update)
- No interface for collectibles
- No interface for obstacles
- No interface for damageable entities

**Current Collision Detection:**

```typescript
// Uses instanceof everywhere
if (entity instanceof Ghost) {
  this.handleGhostCollision(player, entity);
} else if (entity instanceof Star) {
  this.handleStarCollision(player, entity);
}
// ... many more instanceof checks
```

**Problem:** Adding new entity types requires modifying CollisionManager (violates Open/Closed Principle).

### 💡 Solution Design

**Step 1: Define Proper Interfaces**

```typescript
/**
 * Core interfaces for game entities
 */

/** Entity can be drawn to screen */
export interface IDrawable {
  draw(ctx: GameContext): void;
}

/** Entity updates each frame */
export interface IUpdateable {
  update(ctx: GameContext): void;
}

/** Entity can be collected by player */
export interface ICollectible {
  onCollect(player: Player): void;
  getScoreValue(): number;
}

/** Entity damages player on contact */
export interface IObstacle {
  onCollision(player: Player): void;
  getDamageAmount(): number;
}

/** Entity blocks movement */
export interface ISolid {
  blocksMovement(): boolean;
}

/** Entity can take damage */
export interface IDamageable {
  takeDamage(amount: number): void;
  isDestroyed(): boolean;
}

/** Entity has spatial properties */
export interface IPositioned {
  position: p5.Vector;
  size: p5.Vector;
}
```

**Step 2: Implement Interfaces**

```typescript
export class Star extends Entity implements ICollectible {
  onCollect(player: Player): void {
    player.activateMultiplier(STAR_MULTIPLIER, STAR_DURATION);
  }

  getScoreValue(): number {
    return 10;
  }
}

export class Ghost extends Entity implements IObstacle, IUpdateable {
  onCollision(player: Player): void {
    player.takeDamage(1);
    player.addScore(-5);
  }

  getDamageAmount(): number {
    return 1;
  }

  update(ctx: GameContext): void {
    // Bouncing logic
  }
}
```

**Step 3: Refactor Collision Detection**

```typescript
export class CollisionManager {
  handleCollision(player: Player, entity: Entity): void {
    // Use interfaces instead of instanceof
    if (this.isCollectible(entity)) {
      entity.onCollect(player);
      this.removeEntity(entity);
    } else if (this.isObstacle(entity)) {
      entity.onCollision(player);
    }
  }

  private isCollectible(entity: Entity): entity is ICollectible {
    return 'onCollect' in entity;
  }

  private isObstacle(entity: Entity): entity is IObstacle {
    return 'onCollision' in entity;
  }
}
```

### ⚒️ Implementation Tasks

**Task 5.1**: Define all game interfaces in `interfaces.ts`
**Task 5.2**: Refactor Entity to implement appropriate interfaces
**Task 5.3**: Update all entity classes to implement correct interfaces
**Task 5.4**: Refactor CollisionManager to use interfaces
**Task 5.5**: Remove unnecessary instanceof checks
**Task 5.6**: Add type guards for interfaces
**Task 5.7**: Update documentation with interface contracts

**Estimated Time**: 6-8 hours

### ✅ Validation

- [ ] No unnecessary interface methods
- [ ] Entities implement only needed interfaces
- [ ] Collision detection uses interfaces, not instanceof
- [ ] Easy to add new entity types without changing CollisionManager
- [ ] Type guards work correctly

### 📝 Reflection Questions

1. How does ISP relate to SRP?
2. When should you use interfaces vs. abstract classes?
3. How do interfaces improve testability?

---

## Module 6: Factory Pattern & Level Design

### 📚 Theory: Creational Patterns

**Factory Pattern:**
> Provides an interface for creating objects without specifying their exact class.

**Current Implementation:**

```typescript
// levelfactory.ts (simplified)
export class LevelFactory {
  static createEntitiesForLevel(level: number[][]): Entity[] {
    const entities: Entity[] = [];

    level.forEach((row, y) => {
      row.forEach((type, x) => {
        if (type === 1) entities.push(new Block(...));
        if (type === 2) entities.push(new Star(...));
        // ... many more if statements
      });
    });

    return entities;
  }
}
```

**Problems:**
1. Hard-coded level data (1,030 lines!)
2. Level data mixed with factory logic
3. Can't load levels from external files
4. Can't create a level editor
5. Hard to add new entity types

**Solution: Separate Data from Logic**

### 💡 Solution Design

**Step 1: Level Data Format (JSON)**

```json
{
  "name": "Level 1 - Easy",
  "difficulty": "easy",
  "gridSize": 32,
  "worldHeight": 600,
  "entityMap": {
    "0": "empty",
    "1": "block",
    "2": "star",
    "3": "heart",
    "4": "plant",
    "5": "ghost",
    "6": "tetrisBlock",
    "7": "winBlock"
  },
  "grid": [
    [1, 1, 1, 1, 1, 1, 1],
    [1, 0, 0, 2, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 1],
    [1, 2, 0, 4, 0, 2, 1],
    [1, 1, 1, 1, 1, 1, 1]
  ]
}
```

**Step 2: Entity Registry**

```typescript
/**
 * Registry mapping entity types to their constructors.
 * Allows dynamic entity creation without switch statements.
 */
export class EntityRegistry {
  private registry: Map<string, EntityConstructor> = new Map();

  register(type: string, constructor: EntityConstructor): void {
    this.registry.set(type, constructor);
  }

  create(type: string, ctx: GameContext, pos: p5.Vector): Entity | null {
    const Constructor = this.registry.get(type);
    return Constructor ? new Constructor(ctx, pos) : null;
  }
}

// Usage
registry.register('block', Block);
registry.register('star', Star);
registry.register('ghost', Ghost);
```

**Step 3: Level Loader**

```typescript
/**
 * Loads level data from JSON files.
 */
export class LevelLoader {
  async loadLevel(path: string): Promise<LevelData> {
    const response = await fetch(path);
    return response.json();
  }
}

/**
 * Creates entities from level data.
 */
export class LevelFactory {
  constructor(
    private registry: EntityRegistry,
    private ctx: GameContext
  ) {}

  createEntities(levelData: LevelData): Entity[] {
    const entities: Entity[] = [];

    levelData.grid.forEach((row, y) => {
      row.forEach((type, x) => {
        const entityType = levelData.entityMap[type.toString()];
        if (entityType && entityType !== 'empty') {
          const pos = this.ctx.p5.createVector(
            x * levelData.gridSize,
            y * levelData.gridSize
          );
          const entity = this.registry.create(entityType, this.ctx, pos);
          if (entity) entities.push(entity);
        }
      });
    });

    return entities;
  }
}
```

### ⚒️ Implementation Tasks

**Task 6.1**: Create level JSON files (level1.json, level2.json, level3.json)
**Task 6.2**: Create EntityRegistry class
**Task 6.3**: Create LevelLoader class
**Task 6.4**: Refactor LevelFactory to use registry
**Task 6.5**: Update GameBoard to load levels asynchronously
**Task 6.6**: Remove hard-coded level arrays
**Task 6.7**: Add level validation (ensure valid entity types)
**Task 6.8**: Create level schema documentation

**Estimated Time**: 6-8 hours

### ✅ Validation

- [ ] Levels load from JSON files
- [ ] Level data separated from code
- [ ] Easy to add new entity types (just register them)
- [ ] Level editor-friendly format
- [ ] Invalid level data is caught and reported

### 📝 Reflection Questions

1. What are the benefits of data-driven design?
2. How could we add a level editor with this architecture?
3. What other game data could be externalized?

---

# Phase 3: Quality Assurance (Weeks 7-9)

## Module 7: Unit Testing Fundamentals

### 📚 Theory: Why Test?

**The Testing Pyramid:**

```
                /\
               /  \
              / E2E \        Few, slow, expensive
             /______\
            /        \
           / Integr.  \      Some, medium speed
          /____________\
         /              \
        /   Unit Tests   \   Many, fast, cheap
       /__________________\
```

**Benefits of Testing:**
1. **Confidence** - Know your code works
2. **Documentation** - Tests show how to use code
3. **Refactoring** - Change code without fear
4. **Design** - Forces you to write testable code
5. **Debugging** - Isolates problems quickly

**What to Test:**

✅ **DO test:**
- Business logic
- Calculations
- State changes
- Edge cases
- Error conditions

❌ **DON'T test:**
- Framework code (p5.js)
- Simple getters/setters
- Configuration
- External libraries

### 🔍 Code Analysis

**Highly Testable Code (after our refactors):**

1. **ScoreManager** - Pure logic, no dependencies
2. **CollisionManager** - Can mock entities
3. **Entity collision detection** - Math functions
4. **Player movement** - Grid-based logic
5. **Power-up effects** - State changes

**Hard to Test (before refactors):**
- Anything using global state
- Anything tightly coupled to p5.js
- Drawing functions

### 💡 Solution Design

**Step 1: Choose Testing Framework**

```bash
npm install --save-dev vitest @vitest/ui
npm install --save-dev @types/jest  # For type support
```

**Why Vitest?**
- Fast (uses Vite)
- Compatible with Jest API
- ESM support
- Great TypeScript support

**Step 2: Configure Testing**

```typescript
// vitest.config.ts
import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    globals: true,
    environment: 'jsdom',  // For DOM testing
    setupFiles: './src/test/setup.ts'
  }
});
```

**Step 3: Create Test Utilities**

```typescript
// src/test/helpers.ts

/**
 * Creates a mock GameContext for testing.
 */
export function createMockContext(): GameContext {
  const mockP5 = {
    createVector: (x: number, y: number) => ({ x, y }),
    // ... other mocked p5 methods
  };

  return {
    p5: mockP5 as any,
    assets: new MockAssetManager(),
    audio: new MockAudioManager()
  };
}

/**
 * Creates a test player with default settings.
 */
export function createTestPlayer(ctx?: GameContext): Player {
  const context = ctx || createMockContext();
  return new Player(
    context,
    context.p5.createVector(100, 100),
    { ArrowUp: 'UP', ArrowDown: 'DOWN', ArrowLeft: 'LEFT', ArrowRight: 'RIGHT' },
    context.assets.getImage('player')
  );
}
```

**Step 4: Write Tests**

```typescript
// src/scoreManager.test.ts

import { describe, it, expect, beforeEach } from 'vitest';
import { ScoreManager } from './scoreManager';
import { createTestPlayer, createMockContext } from './test/helpers';

describe('ScoreManager', () => {
  let scoreManager: ScoreManager;
  let ctx: GameContext;
  let player: Player;

  beforeEach(() => {
    ctx = createMockContext();
    player = createTestPlayer(ctx);
    scoreManager = new ScoreManager();
  });

  describe('addScore', () => {
    it('should increase player score', () => {
      scoreManager.addScore(player, 10);
      expect(scoreManager.getScore(player)).toBe(10);
    });

    it('should handle multiple players independently', () => {
      const player2 = createTestPlayer(ctx);

      scoreManager.addScore(player, 10);
      scoreManager.addScore(player2, 20);

      expect(scoreManager.getScore(player)).toBe(10);
      expect(scoreManager.getScore(player2)).toBe(20);
    });

    it('should allow negative scores', () => {
      scoreManager.addScore(player, 10);
      scoreManager.addScore(player, -15);
      expect(scoreManager.getScore(player)).toBe(-5);
    });
  });

  describe('applyMultiplier', () => {
    it('should multiply score by multiplier', () => {
      player.applyScoreMultiplier(2);
      scoreManager.addScore(player, 10);
      expect(scoreManager.getScore(player)).toBe(20);
    });
  });
});
```

### ⚒️ Implementation Tasks

**Task 7.1**: Install Vitest and configure
**Task 7.2**: Create test utilities and helpers
**Task 7.3**: Write tests for ScoreManager
**Task 7.4**: Write tests for CollisionManager
**Task 7.5**: Write tests for Player movement logic
**Task 7.6**: Write tests for entity factories
**Task 7.7**: Add test script to package.json
**Task 7.8**: Set up CI to run tests
**Task 7.9**: Add test coverage reporting
**Task 7.10**: Achieve >70% code coverage

**Estimated Time**: 10-12 hours

### ✅ Validation

- [ ] All tests pass
- [ ] Tests run in under 5 seconds
- [ ] Code coverage >70%
- [ ] Tests don't depend on each other
- [ ] Tests are readable and well-named

### 📝 Reflection Questions

1. Why is it important to mock dependencies in tests?
2. What makes a good test?
3. How does TDD (Test-Driven Development) differ from this approach?

---

## Module 8: Advanced TypeScript - Type Safety

### 📚 Theory: Making Impossible States Impossible

**Current Type Issues:**

```typescript
// From our codebase
let images: { [key: string]: p5.Image } = {} as any;  // ❌ Using 'any'
```

**The Problem:**
```typescript
const img = images['nonexistent'];  // No type error!
img.width;  // Runtime error: Cannot read property 'width' of undefined
```

**Better Solution - Discriminated Unions:**

```typescript
// Model possible states explicitly
type AssetState<T> =
  | { status: 'loading' }
  | { status: 'loaded'; data: T }
  | { status: 'error'; error: Error };

class AssetManager {
  private images: Map<string, AssetState<p5.Image>> = new Map();

  getImage(key: string): p5.Image | undefined {
    const state = this.images.get(key);

    // TypeScript ensures we handle all cases
    if (state?.status === 'loaded') {
      return state.data;  // Type is p5.Image here
    }

    return undefined;
  }
}
```

**Branded Types - Preventing Confusion:**

```typescript
// Problem: Both are just numbers
type EntityId = number;
type Score = number;

function updateScore(playerId: EntityId, score: Score): void { }

// Oops! Swapped arguments, no error
updateScore(100, 5);  // 100 is score, 5 is player ID - wrong!

// Solution: Branded types
type EntityId = number & { __brand: 'EntityId' };
type Score = number & { __brand: 'Score' };

function createEntityId(n: number): EntityId {
  return n as EntityId;
}

function createScore(n: number): Score {
  return n as Score;
}

// Now TypeScript catches the error
updateScore(createScore(100), createEntityId(5));  // ❌ Type error!
```

**Const Assertions - Immutable Data:**

```typescript
// Before
const entityMap = {
  block: 1,
  star: 2,
  heart: 3
};
// Type: { block: number; star: number; heart: number }

// After
const entityMap = {
  block: 1,
  star: 2,
  heart: 3
} as const;
// Type: { readonly block: 1; readonly star: 2; readonly heart: 3 }

type EntityType = typeof entityMap[keyof typeof entityMap];  // 1 | 2 | 3
```

### ⚒️ Implementation Tasks

**Task 8.1**: Remove all `any` types from codebase
**Task 8.2**: Implement AssetState discriminated union
**Task 8.3**: Add branded types for IDs and scores
**Task 8.4**: Use const assertions for configuration
**Task 8.5**: Enable strict TypeScript options
**Task 8.6**: Fix all new type errors
**Task 8.7**: Add utility types for common patterns

**Estimated Time**: 6-8 hours

### ✅ Validation

- [ ] No `any` types in codebase
- [ ] Strict mode enabled
- [ ] No type assertions except branded types
- [ ] All possible states modeled in types
- [ ] Tests pass with strict types

---

## Module 9: Documentation Generation & API Docs

### 📚 Theory: Living Documentation

**The Documentation Problem:**
- Comments get outdated
- Docs diverge from code
- Duplication of information

**Solution: Generate Docs from Code**

Using **TypeDoc** to generate HTML documentation:

```bash
npm install --save-dev typedoc
```

**Configuration:**

```json
// typedoc.json
{
  "entryPoints": ["src/main.ts"],
  "out": "docs",
  "theme": "default",
  "includeVersion": true,
  "excludePrivate": false,
  "categorizeByGroup": true,
  "categoryOrder": [
    "Core",
    "Entities",
    "Managers",
    "Screens",
    "*"
  ]
}
```

### ⚒️ Implementation Tasks

**Task 9.1**: Install TypeDoc
**Task 9.2**: Configure TypeDoc
**Task 9.3**: Add categories to JSDoc comments
**Task 9.4**: Generate documentation
**Task 9.5**: Add architecture diagrams
**Task 9.6**: Create README with links to docs
**Task 9.7**: Set up docs deployment

**Estimated Time**: 4-5 hours

---

# Phase 4: Advanced Topics (Weeks 10-12)

## Module 10: Performance Optimization

### 📚 Theory: Measure, Don't Guess

**Performance Optimization Steps:**

1. **Measure** - Profile to find bottlenecks
2. **Analyze** - Understand why it's slow
3. **Optimize** - Fix the bottleneck
4. **Verify** - Measure again

**Common Performance Issues:**

1. **Collision Detection** - O(n×m) complexity
2. **Rendering** - Drawing off-screen entities
3. **Object Creation** - Creating new objects every frame
4. **Array Operations** - Unnecessary iterations

### 💡 Optimization Strategies

**1. Spatial Partitioning (Quadtree)**

```typescript
class Quadtree {
  private bounds: Rectangle;
  private capacity: number;
  private entities: Entity[] = [];
  private divided: boolean = false;
  private children: Quadtree[] = [];

  insert(entity: Entity): boolean { }
  query(range: Rectangle): Entity[] { }
  subdivide(): void { }
}
```

**Benefits:**
- Reduces collision checks from O(n²) to O(n log n)
- Only checks nearby entities

**2. Object Pooling**

```typescript
class EntityPool<T extends Entity> {
  private pool: T[] = [];

  acquire(): T {
    return this.pool.pop() || this.create();
  }

  release(entity: T): void {
    entity.reset();
    this.pool.push(entity);
  }
}
```

**Benefits:**
- Reduces garbage collection
- Reuses objects instead of creating new ones

**3. Frustum Culling**

```typescript
class Camera {
  isVisible(entity: Entity): boolean {
    return entity.position.x + entity.size.x > this.position.x &&
           entity.position.x < this.position.x + this.width;
  }
}
```

**Benefits:**
- Don't draw off-screen entities
- Reduces draw calls

### ⚒️ Implementation Tasks

**Task 10.1**: Add performance profiling
**Task 10.2**: Implement quadtree for collision detection
**Task 10.3**: Add frustum culling
**Task 10.4**: Implement object pooling for frequently created entities
**Task 10.5**: Optimize rendering pipeline
**Task 10.6**: Add FPS counter
**Task 10.7**: Benchmark before/after

**Estimated Time**: 8-10 hours

---

## Module 11: Entity Component System (ECS)

### 📚 Theory: Data-Oriented Design

**Current Architecture: Object-Oriented**

```
Entity (base class)
  ├─ Player
  ├─ Ghost
  ├─ Star
  └─ Block
```

**Problems:**
- Rigid hierarchy
- Hard to mix behaviors
- Poor cache locality

**ECS Architecture:**

```
Components (data)
  ├─ PositionComponent
  ├─ VelocityComponent
  ├─ SpriteComponent
  └─ CollisionComponent

Systems (logic)
  ├─ MovementSystem
  ├─ RenderSystem
  └─ CollisionSystem

Entities (just IDs)
  Entity 1: [Position, Velocity, Sprite]
  Entity 2: [Position, Collision]
```

**Benefits:**
- Flexible composition
- Better performance (cache-friendly)
- Easy to add new behaviors

### 💡 Solution Design

```typescript
// Component - Pure data
interface Component {
  entityId: number;
}

interface PositionComponent extends Component {
  x: number;
  y: number;
}

interface VelocityComponent extends Component {
  vx: number;
  vy: number;
}

// System - Pure logic
abstract class System {
  abstract update(entities: Entity[], components: ComponentManager): void;
}

class MovementSystem extends System {
  update(entities: Entity[], components: ComponentManager): void {
    for (const entity of entities) {
      const pos = components.get<PositionComponent>(entity.id, 'position');
      const vel = components.get<VelocityComponent>(entity.id, 'velocity');

      if (pos && vel) {
        pos.x += vel.vx;
        pos.y += vel.vy;
      }
    }
  }
}
```

### ⚒️ Implementation Tasks

**Task 11.1**: Design ECS architecture
**Task 11.2**: Implement ComponentManager
**Task 11.3**: Create core components
**Task 11.4**: Create core systems
**Task 11.5**: Migrate one entity to ECS
**Task 11.6**: Compare performance
**Task 11.7**: Document ECS patterns

**Estimated Time**: 12-15 hours

**Note:** This is optional advanced topic - only if you want to explore alternative architectures!

---

## Module 12: Final Project - New Feature

### 🎯 Apply Everything You've Learned

**Goal:** Add a complete new feature using all techniques learned.

**Feature Ideas:**

1. **Power-Up System**
   - Speed boost
   - Invincibility
   - Shrink/grow
   - Time slow

2. **Enemy AI**
   - Pathfinding
   - Different behaviors
   - Boss enemies

3. **Particle Effects**
   - Collision effects
   - Trail effects
   - Power-up activation

4. **Multiplayer Enhancements**
   - Split screen
   - Versus mode
   - Co-op challenges

**Requirements:**

✅ **Must Have:**
- [ ] Follow all SOLID principles
- [ ] Use dependency injection
- [ ] Write unit tests (>80% coverage)
- [ ] Full JSDoc documentation
- [ ] No magic numbers
- [ ] No global state
- [ ] Performance profiling
- [ ] Add to level JSON format

### ⚒️ Implementation Process

1. **Design** (2 hours)
   - Write technical specification
   - Create UML diagrams
   - List all dependencies

2. **Implement** (6-8 hours)
   - Write tests first (TDD)
   - Implement feature
   - Refactor as needed

3. **Document** (1 hour)
   - API documentation
   - Usage examples
   - Update README

4. **Review** (1 hour)
   - Code review checklist
   - Performance testing
   - User testing

**Estimated Time**: 10-12 hours

---

## 🎓 Graduation Requirements

To complete this curriculum, you must:

### ✅ Core Requirements

- [ ] Complete all modules 1-9
- [ ] All tests passing
- [ ] Code coverage >70%
- [ ] No TypeScript errors with strict mode
- [ ] Documentation generated
- [ ] Zero `any` types
- [ ] Zero global variables (except initialization)

### ✅ Final Project

- [ ] Complete Module 12 (new feature)
- [ ] Present your work (5-minute demo)
- [ ] Code review with mentor/peer

### ✅ Knowledge Assessment

Answer these questions in a written document:

1. Explain SOLID principles with examples from the codebase
2. Why is dependency injection important?
3. What are the benefits and drawbacks of ECS?
4. How do you decide what to test?
5. Describe the game architecture in your own words

---

## 📚 Additional Resources

### Books
- "Clean Code" by Robert C. Martin
- "Design Patterns" by Gang of Four
- "Refactoring" by Martin Fowler
- "Game Programming Patterns" by Robert Nystrom

### Online
- [TypeScript Deep Dive](https://basarat.gitbook.io/typescript/)
- [Refactoring Guru](https://refactoring.guru/)
- [Game Programming Patterns](https://gameprogrammingpatterns.com/)

### Practice
- [TypeScript Exercises](https://typescript-exercises.github.io/)
- [Refactoring Kata](https://github.com/emilybache/GildedRose-Refactoring-Kata)

---

## 🎉 Conclusion

**You've built:**
- Clean, maintainable code
- Testable architecture
- Professional documentation
- Optimized performance
- Real-world software engineering skills

**Remember:**
> "Any fool can write code that a computer can understand. Good programmers write code that humans can understand."
> — Martin Fowler

**Next Steps:**
- Apply these principles to other projects
- Teach others what you've learned
- Contribute to open-source projects
- Keep learning and improving

---

## 📝 Progress Tracking

Use this checklist to track your progress:

### Phase 1: Foundations
- [ ] Module 1: Magic Numbers
- [ ] Module 2: Documentation
- [ ] Module 3: Single Responsibility

### Phase 2: Architecture
- [ ] Module 4: Dependency Injection
- [ ] Module 5: Interface Segregation
- [ ] Module 6: Factory Pattern

### Phase 3: Quality Assurance
- [ ] Module 7: Unit Testing
- [ ] Module 8: Type Safety
- [ ] Module 9: Documentation Generation

### Phase 4: Advanced
- [ ] Module 10: Performance
- [ ] Module 11: ECS (Optional)
- [ ] Module 12: Final Project

**Start Date**: _______________
**Target Completion**: _______________
**Actual Completion**: _______________

---

**Good luck on your learning journey! 🚀**
