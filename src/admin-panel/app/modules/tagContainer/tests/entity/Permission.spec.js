/**
 * Copyright (C) 2015 Digimedia Sp. z.o.o. d/b/a Clearcode
 *
 * This program is free software: you can redistribute it and/or modify it under
 * the terms of the GNU Affero General Public License as published by the Free
 * Software Foundation, either version 3 of the License, or (at your option) any
 * later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 */

/* global describe: false, jasmine: false, beforeEach: false, it: false, expect: false */


describe('Unit: Permission entity', () => {
    var permissionResource, permission;

    beforeEach(angular.mock.module('clearcode.tm.tagContainer'));

    beforeEach(angular.mock.inject([
        'clearcode.tm.tagContainer.permissionResource',
        (_permissionResource_) => {
            permissionResource = _permissionResource_;
            permission = permissionResource.getEntityObject();

            spyOn(permissionResource, 'put');
        }
    ]));

    it('should be defined', () => {
        expect(permission).toBeDefined();
    });

    describe('when call save method', () => {
        it('should call put method of resource when id is defined', () => {
            permission.user = {
                id: 1
            };
            permission.permissions = ['view'];
            permission.save(1);

            expect(permissionResource.put).toHaveBeenCalled();
        });
    });
});
