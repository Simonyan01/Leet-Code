let merge = function (nums1, m, nums2, n) {
    let firstLength = m - 1
    let secondLength = n - 1
    let globalLength = m + n - 1

    while (secondLength >= 0) {
        if (nums1[firstLength] > nums2[secondLength]) {
            nums1[globalLength] = nums1[firstLength]
            firstLength--
        } else {
            nums1[globalLength] = nums2[secondLength]
            secondLength--
        }
        globalLength--
    }
}