export interface HashComparer {
  compare(field: string, fieldToCompare: string): Promise<boolean>;
}
