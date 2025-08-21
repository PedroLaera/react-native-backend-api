class category {
  constructor(id, name, description) {
    this.id = id;
    this.name = name;
    this.description = description;
  }
  toJson() {
    return {
      id: this.id,
      name: this.name,
      description: this.description,
    };
  }
}
