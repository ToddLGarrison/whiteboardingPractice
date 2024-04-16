function validateBst(tree, min = -Infinity, max = Infinity) {
    if(tree == null) return true;
    if(tree.value < min || tree.value >= max) return false

    return validateBst(tree.left, min, tree.value) && validateBst(tree.right, tree.value, max)
}

